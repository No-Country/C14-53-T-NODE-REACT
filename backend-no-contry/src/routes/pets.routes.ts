import { Router } from "express";
import { createPets, findPet, findAllPets, deletePets, updatePet } from "../controllers/pets.controllers";
import { schemaValidator } from "../utils/schemaValidator";
import { CreatePetSchema, FindPetSchema } from "../interfaces/petSchema";



const router: Router = Router()

router.post('/', schemaValidator(CreatePetSchema), createPets )
router.get('/:id',schemaValidator(FindPetSchema), findPet)
router.get('/', findAllPets)
router.delete('/:id',schemaValidator(FindPetSchema), deletePets)
router.put('/:id',schemaValidator(FindPetSchema), updatePet)

export default router

