import { Request } from "express";
import multer, { StorageEngine } from "multer";

const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, "./src/uploads");
  },
  filename: (req: Request, file, cb) => {
    const fileExtension = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${Date.now()}.${fileExtension}`)
  }
})

export const upload = multer({ storage })