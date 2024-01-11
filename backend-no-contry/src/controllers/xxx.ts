import { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary'
import User from '../models/user.model';
import { handleHttp } from '../utils/error.handle';


// Configura Cloudinary con tus credenciales
cloudinary.config({
  cloud_name: 'tu-cloud-name',
  api_key: 'tu-api-key',
  api_secret: 'tu-api-secret',
});


const CloudinaryController = async (req: Request, res: Response): Promise< { msg: string } | void> => {
  try {
    const { id } = req.params
      
    if (!req.file) {
      return { msg: 'No se proporcionó ninguna imagen' }
    }
    const buffer = req.file.buffer      
    const user = await userImageChange(id, buffer)
    res.json(user)
  } catch (error) {
    handleHttp(res, 'Error cambiando imagen de usuario', error)
  }
};

const userImageChange = async  (id: string, buffer: Buffer): Promise<{ secureUrl: string; publicId: string } | { msg: string } > => {

    const findUser = await User.findOne({ where: { id: id } })
    if (!findUser) return { msg: "Usuario no encontrado" }

    const userImage = await uploadImage(buffer)

    await User.update(
       {
         image: userImage.secureUrl,
         publicId: userImage.publicId
       },
       { where: { id: id} }
    )
  
    return {
      secureUrl: userImage.secureUrl,
      publicId: userImage.publicId
    };   
    
}

const uploadImage = (buffer: Buffer): Promise<{ secureUrl: string; publicId: string }  > => {
  const folder = 'PetCare'
return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: 'auto', folder }, (error: any, result: any) => {
      if (error) {
        reject(error.message);
      } else {
        resolve({ secureUrl: result.secure_url, publicId: result.public_id });
      }
    }).end(buffer);
  });
};



export default CloudinaryController;


