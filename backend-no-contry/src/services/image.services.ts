import { uploadImage, deleteImage } from '../config/cloudinary';

const uploadImageCreate = async (data: { image: { data: Buffer } }): Promise<string> => {
  const buffer = data.image.data;
  const urlImage = await uploadImage(buffer);
  console.log(urlImage);
  return urlImage;
};

const deleteImageDestroy = async (data: { image: { data: string } }): Promise<any> => {
  const imageBuffer = Buffer.from(data.image.data, 'base64');
  const resultImage = await deleteImage(imageBuffer);
  return resultImage;
};

export {
  uploadImageCreate,
  deleteImageDestroy
};
