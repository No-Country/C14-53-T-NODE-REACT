import { v2 as cloudinary } from 'cloudinary';

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

// Configuracion inicial
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
})

// Subir imagenes
export async function uploadImage(filePath: string) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "Images"
  })
}