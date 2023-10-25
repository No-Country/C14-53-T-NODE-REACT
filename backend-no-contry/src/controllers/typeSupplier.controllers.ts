import { Request, Response, request } from "express";
import { CreateTypeSupplierType, TypeSupplierSchemaType, FindTypeSupplierSchemaType } from "../interfaces/typeSupplierSchema";
import { TypeSupplier } from "../models/typeSupplier.model";




export const createType = async (req: Request<unknown, unknown, CreateTypeSupplierType>, res: Response) => {
    try {
        const { typeSupplier } = req.body
        const saveType: TypeSupplierSchemaType = await TypeSupplier.create({
            typeSupplier
        })
        return res.status(200).json({ message: 'created type supplier', data: saveType });
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' });
    }
}

export const findType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const type: TypeSupplierSchemaType | null = await TypeSupplier.findOne({ where: { id } })
        if (!type) return res.status(404).json({ message: 'No type found' });
        return res.status(200).json({ message: 'found type', data: type })
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' })
    }
}

export const findAllTypes = async (_req: Request, res: Response) => {
    try {
        const types: TypeSupplierSchemaType[] = await TypeSupplier.findAll()
        return res.status(200).json({ message: 'all pets', data: types })
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' })
    }
}

export const deleteType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let deletedType = await TypeSupplier.destroy({ where: { id } });
        if (!deletedType) return res.status(404).json({ message: "no type found" })
        return res.status(200).json({ message: 'type removed', data: deletedType })
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' })
    }
}

// export const updateType = async(req: Request, res: Response) => {
//     try {
//         const {id} = req.params;
//         const {typeSupplier} = req.body;
//         const typeId = await typeSupplier.findOne({where:{id}})
//         if(!typeId) return res.status(404).json({message:'no type found'})
//         const updatedType = await typeSupplier.update({
//          typeSupplier         
//         },
//         {where:{id}})
//         if (updatedType[0]>0){
//             const updatetype = await typeSupplier.findByPk(id)
//             return res.status(200).json({message:'updated type', data: updatetype})       
//         }
//         return res.status(404).json({ message: 'No type found for update' });
//     } catch (error) {
//         return res.status(500).json({message:'unexpected error'})
//     }
// }

