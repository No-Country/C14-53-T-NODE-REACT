import { Request, Response } from "express";
import { CreateMedicalType, MedicalSchemaType, FindMedicalType} from "../interfaces/medicalSchema";
import { MedicalRecord } from "../models/medicalRecord.model";




export const createMedicalController = async(req: Request<unknown, unknown, CreateMedicalType>, res: Response)=> {
    try {
        const { date, treatment, type, note } = req.body;
        const saveMedical: MedicalSchemaType = await MedicalRecord.create({
            date,
            treatment,
            type,
            note
        })
        return res.status(200).json({ message: 'created medical', data: saveMedical });
    } catch (error) {
        return res.status(500).json({message:'unexpected error'})        
    }

}

export const findMedicalController = async (req: Request<FindMedicalType>, res: Response) => {
    try {
        const {id} = req.params;
        const medical  = await MedicalRecord.findOne( {where: {id} } )
        if(!medical) return res.status(404).json({ message: 'No pet found' });
        return res.status(200).json({message:'found pet', data: medical}) 
    } catch (error) {
        return res.status(500).json({message:'unexpected error'}) 
    }
}

export const findAllMedicalController = async (_req: Request, res:Response) => {
    try {
        const medical: MedicalSchemaType[] = await MedicalRecord.findAll()
        return res.status(200).json({ message: 'all medical record', data: medical})
    } catch (error) {
        return res.status(500).json({ error, message: 'unexpected error' })
    }

}