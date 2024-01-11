import { v2 as cloudinary } from 'cloudinary';

const { 
  CLOUDINARY_NAME, 
  CLOUDINARY_API_KEY, 
  CLOUDINARY_API_SECRET } = process.env;

// Configuracion inicial
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
})

// Subir imagenes
async function uploadImage(filePath: string) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "PetCare"
  })
}

const uploadImageBuffer = (buffer: Buffer): Promise<{ secureUrl: string; publicId: string }  > => {
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

const deleteImage = async (publicId: string): Promise<any> => {
  return await cloudinary.uploader.destroy(publicId);
};

export {
  uploadImageBuffer,
  uploadImage,
  deleteImage
};
