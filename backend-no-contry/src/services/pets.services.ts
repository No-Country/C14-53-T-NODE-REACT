import { PetInterface } from "../interfaces/pet.interface"
import Pet from "../models/petModel"

const findByIdPet = async (id: string): Promise<PetInterface | { msg: string }> => {
    const pet = await Pet.findOne({where: { id: id}})
    if (!pet) return { msg: "Mascota no encontrada" }
    return pet

}


export {
    findByIdPet
}