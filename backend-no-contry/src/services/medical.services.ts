import { MedicalInterface } from "../interfaces/medical.interface";
import { PetInterface } from "../interfaces/pet.interface";
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



export {
    createNewMedical
}