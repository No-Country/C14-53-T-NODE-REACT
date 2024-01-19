import { Request, Response } from "express";
import { RequestExtends } from "../interfaces/reqExtends.interface";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";
import { 
         createNewMedical, 
         searchMedicalId, 
         searchMedicalAll, 
         modifyMedical} from "../services/medical.services";

 const createMedicalController = async (req: RequestExtends, res: Response): Promise< { msg: string } | void > => {
  try {

    const userId = (req.user as JwtPayload)?.id    
    const newMedical = await createNewMedical(userId, req.body)
    res.json(newMedical)

  } catch (error) {
    
    handleHttp(res, 'Error al crear historia medica.', error)
  }

}

const findMedicalController = async (req: RequestExtends, res: Response): Promise< { msg: string } | void > => {
  try {

    const userId = (req.user as JwtPayload)?.id 
    const medical = await searchMedicalId(userId, req.body.id, req.body.petMedicalId)
    res.json(medical)

  } catch (error) {
  
    handleHttp(res, 'Error en historia medica', error)
  }
}


const allMedicalController = async (req: RequestExtends, res: Response): Promise< { msg: string } | void > =>{
  try {

    const userId = (req.user as JwtPayload)?.id 
    const medical = await searchMedicalAll(userId, req.params.id)
    res.json(medical)

  } catch (error) {
  
    handleHttp(res, 'Error en historia medica', error)
  }

}

const modifyMedicalController = async (req: RequestExtends, res: Response): Promise< { msg: string } | void > =>{
  try {

    const userId = (req.user as JwtPayload)?.id 
    const medical = await modifyMedical(userId, req.params.id, req.body)
    res.json(medical)

  } catch (error) {
  
    handleHttp(res, 'Error en historia medica', error)
  }

}

export {
  createMedicalController,
  findMedicalController,
  allMedicalController,
  modifyMedicalController
}