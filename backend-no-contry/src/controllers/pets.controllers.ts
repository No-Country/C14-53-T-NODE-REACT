import { Request, Response } from "express";
import { CreatePetType, FindPetType, PetSchemaType, PutPetType } from "../interfaces/petSchema";
import Pet from "../models/petModel";
import { RequestExtends } from "../interfaces/reqExtends.interface";
import { uploadImage } from "../config/cloudinary";
import fs from "fs-extra"

export const createPets = async (req: RequestExtends, res: Response) => {

  console.log("REQ.FILE", req.file);
  console.log("REQ.FILES", req.files);

  if (typeof req.user === 'string') {
    res.status(401).json({ msg: "Token de usuario no válido" });
    return;
  }

  try {
    const userId = req.user?.id;
    let { name, surname, birthdate, image, breed, species, descriptions, weight } = req.body

    if (req.file) {
      const urlCloudinary = await uploadImage(req.file.path)
      if (urlCloudinary) {
        // Asigna la URL a image
        image = urlCloudinary.url
        // Borra la imagen que se guarda en el path uploads
        await fs.unlink(req.file.path)
      } else {
        return res.status(400).json({ message: 'error uploading image' })
      }

    }
    const savePet: PetSchemaType = await Pet.create({
      userId: userId,
      name,
      surname,
      birthdate,
      weight,
      image,
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
export const findPetsByUserId = async (req: RequestExtends, res: Response) => {
  if (typeof req.user === 'string') {
    res.status(401).json({ msg: "Token de usuario no válido" });
    return;
  }

  const user = req.user?.id

  try {
    const pet = await Pet.findAll({ where: { userId: user } })
    if (!pet) return res.status(404).json({ message: 'No pet found' });
    return res.status(200).json({ message: 'Found your pets!', pets: pet })
  } catch (error) {
    return res.status(500).json({ message: 'unexpected error', error: error })
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
    if (!petDestroy) return res.status(404).json({ message: 'No pet found' })
    const pet = await Pet.findByPk(id, { paranoid: false })
    return res.status(200).json({ message: 'pet removed', data: pet })
  } catch (error) {
    return res.status(500).json({ message: 'unexpected error' })
  }

}

export const updatePet = async (req: Request<FindPetType, unknown, PutPetType>, res: Response) => {
  try {
    const { id } = req.params
    const { name, surname, birthdate, image, breed, species, descriptions, weight } = req.body
    const petId = await Pet.findOne({ where: { id } })
    if (!petId) return res.status(404).json({ message: "no pet found" });
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
      { where: { id } })
    if (petUpdate[0] > 0) {
      const updatePet = await Pet.findByPk(id)
      return res.status(200).json({ message: 'updated pet', data: updatePet })
    }
    return res.status(404).json({ message: 'No pet found for update' });
  } catch (error) {
    return res.status(500).json({ message: 'unexpected error' })
  }

}
