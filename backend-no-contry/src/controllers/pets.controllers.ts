import { Request, Response } from "express";
import { CreatePetType, FindPetType, PetSchemaType, PutPetType } from "../interfaces/petSchema";
import Pet from "../models/petModel";
import {uploadImage} from "../middleware/cloudinary"
import { FileArray, UploadedFile } from "express-fileupload";

// interface tempFilePath extends UploadedFile {}
   

export const createPets = async (req: Request<unknown, unknown, CreatePetType>, res: Response) => {
     try {
         const file = req?.files[0] as UploadedFile[]
        console.log(file)
        // const resultImage:   = await uploadImage(file)
        
        
        const  { userId, name, surname, birthdate, breed, species, descriptions, weight } = req.body

        const savePet: PetSchemaType = await Pet.create({
            userId,
            name,
            surname,
            birthdate,
            weight,
            // image,
            species,
            breed,
            descriptions,
        })
        return res.status(200).json({ message: 'created pet', data: savePet });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'unexpected error' })
    }
}

export const findPet = async (req: Request<FindPetType>, res: Response) => {
    try {
        const { id } = req.params
        const pet = await Pet.findOne({ where: { id } })
        if (!pet) return res.status(404).json({ message: 'No pet found' });
        return res.status(200).json({ message: 'found pet', data: pet })
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' })
    }
}

export const findAllPets = async (_req: Request, res: Response) => {
    try {
        const pets: PetSchemaType[] = await Pet.findAll()
        return res.status(200).json({ message: 'all pets', data: pets })

    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' })
    }

}

export const deletePets = async (req: Request<FindPetType>, res: Response) => {
    try {
        const { id } = req.params
        const petDestroy = await Pet.destroy({ where: { id } })
        if(!petDestroy) return res.status(404).json({ message: 'No pet found' })
        const pet = await Pet.findByPk(id,{paranoid: false })
        return res.status(200).json({message:'pet removed', data: pet}) 
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' })
    }

}

export const updatePet = async (req: Request<FindPetType, unknown, PutPetType>, res: Response) => {
    try {
        const {id} = req.params
        const { name, surname, birthdate, image, breed, species, descriptions, weight } = req.body
        const petId = await Pet.findOne({ where: { id }  })
        if (!petId) return res.status(404).json({ message: "no pet found"});
        const petUpdate = await Pet.update({
            name,
            surname, 
            birthdate,
            weight,
            image,
            species,
            breed,
            descriptions,
        },
            {where:{id}})
        if (petUpdate[0]>0){
            const updatePet = await Pet.findByPk(id)
            return res.status(200).json({ message: 'updated pet', data: updatePet })
        }
        return res.status(404).json({ message: 'No pet found for update' });
    } catch (error) {
        return res.status(500).json({ message: 'unexpected error' })
    }

}