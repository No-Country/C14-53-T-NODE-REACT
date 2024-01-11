import { uploadImage, deleteImage } from '../config/cloudinary';

const uploadImageCreate = async (data: { image: { data: Buffer } }): Promise<{ secureUrl: string, publicId: string }> => {
  const buffer = data.image.data;
  const urlImage = await uploadImage(buffer);
  console.log(urlImage);
  return urlImage;
};

const deleteImageDestroy = async (data: { image: { data: string } }): Promise<any> => {
  const publicId = data.image.data;  // Suponiendo que el ID de la imagen está almacenado en data.image.data
  const resultImage = await deleteImage(publicId);
  return resultImage;
};


export {
  uploadImageCreate,
  deleteImageDestroy
};
