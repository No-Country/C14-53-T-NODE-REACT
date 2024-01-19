import { MedicalInterface } from "../interfaces/medical.interface";
import { MedicalRecord } from "../models/medicalRecord.model";
import { findByIdPet } from "./pets.services";

const createNewMedical = async( userId: string, body: MedicalInterface): Promise<MedicalInterface | { msg: string } | void > => {
   
    const {petMedicalId, ... restBody} = body

    const pet = await findByIdPet(petMedicalId)
    if ('msg' in pet) return { msg: pet.msg }
    if(userId !== pet.userId) return { msg: "Mascota no pertenece a usuario" }
    
    const saveMedical = await MedicalRecord.create({ ...restBody, petMedicalId})
    return saveMedical
    
}

const searchMedicalId = async (userId: string, id: string, petMedicalId: string ): Promise<MedicalInterface | { msg: string }>  =>{
  
    const pet = await findByIdPet(petMedicalId)
    if ('msg' in pet) return { msg: pet.msg }
    if(userId !== pet.userId) return { msg: "Mascota no pertenece a usuario" } 
    
    const medical = await findMedicalId(id)
     if ('msg' in medical) return { msg: medical.msg }
    if(medical.petMedicalId !== petMedicalId) return { msg: "Historia medica no pertenece a la mascota" } 
    
    return medical

}

const findMedicalId = async ( id: string ) => {
   
    const medical = await MedicalRecord.findOne({where: { id: id}})
    if (!medical) return { msg: "Historia medica no encontrada" }
   
    return medical
    
}

export {
    createNewMedical,
    searchMedicalId
}