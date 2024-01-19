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

const searchMedicalAll = async (userId: string, id: string): Promise<MedicalInterface[] | { msg: string }>  =>{
  
    const pet = await findByIdPet(id)
    if ('msg' in pet) return { msg: pet.msg }
    if(userId !== pet.userId) return { msg: "Mascota no pertenece a usuario" } 
    
    const medical = await findMedicalAll(id)
    if ('msg' in medical) return { msg: medical.msg }
    if(medical[0].petMedicalId !== id) return { msg: "Historia medica no pertenece a la mascota" } 
    
    return medical

}


const modifyMedical = async (userId: string, id: string, body: MedicalInterface): Promise<MedicalInterface | { msg: string }>  =>{
  
    const { petMedicalId, ...restBody } = body

    const pet = await findByIdPet( petMedicalId)
    if ('msg' in pet) return { msg: pet.msg }
    if(userId !== pet.userId) return { msg: "Mascota no pertenece a usuario" } 

    let medical = await findMedicalId(id)
    if ('msg' in medical) return { msg: medical.msg }

    
    await modifyMedicalId(id, {...restBody, petMedicalId})

    medical = await findMedicalId(id)
    if ('msg' in medical) return { msg: medical.msg }
     
    
    return medical

}

const findMedicalId = async ( id: string ) => {
   
    const medical = await MedicalRecord.findOne({where: { id: id}})
    if (!medical) return { msg: "Historia medica no encontrada" }
   
    return medical

}

const findMedicalAll = async ( id: string ) => {
   
    const medical = await MedicalRecord.findAll( {where:{ petMedicalId: id}})
    if (!medical) return { msg: "Historia medica no encontrada" }
   
    return medical

}

const  modifyMedicalId = async ( id: string, body: MedicalInterface ) => {
   
   await MedicalRecord.update({...body},{where: { id: id}})

}



export {
    createNewMedical,
    searchMedicalId,
    searchMedicalAll,
    modifyMedical
}