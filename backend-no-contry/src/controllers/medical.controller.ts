import { Request, Response } from "express";
import { MedicalSchemaType, FindMedicalType} from "../validator/medicalSchema";
import { MedicalRecord } from "../models/medicalRecord.model";
import { RequestExtends } from "../interfaces/reqExtends.interface";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";
import { createNewMedical, searchMedicalId } from "../services/medical.services";



 const createMedicalController = async (req: RequestExtends, res: Response): Promise< { msg: string } | void > => {
  try {

    const userId = (req.user as JwtPayload)?.id    
    const newMedical = await createNewMedical(userId, req.body)
    res.json(newMedical)

  } catch (error) {
    
    handleHttp(res, 'Error al crear historia medica.', error)
  }

}
// const findMedicalController = async (req: Request<FindMedicalType>, res: Response) => {
//   try {
//     const { id } = req.params;
//     const medical = await MedicalRecord.findOne({ where: { id } })
//     if (!medical) return res.status(404).json({ message: 'No pet found' });
//     return res.status(200).json({ message: 'found pet', data: medical })
//   } catch (error) {
//     return res.status(500).json({ message: 'unexpected error' })
//   }
// }
const findMedicalController = async (req: RequestExtends, res: Response): Promise< { msg: string } | void > => {
  try {
    const userId = (req.user as JwtPayload)?.id 
    const medical = await searchMedicalId(userId, req.params)
    res.json(medical)
  } catch (error) {
  
    handleHttp(res, 'Error en historia medica', error)
  }
}


const findAllMedicalController = async (_req: Request, res: Response) => {
  try {
    const medical: MedicalSchemaType[] = await MedicalRecord.findAll()
    return res.status(200).json({ message: 'all medical record', data: medical })
  } catch (error) {
    return res.status(500).json({ error, message: 'unexpected error' })
  }

}


export {
  createMedicalController,
  findMedicalController,
  findAllMedicalController
}