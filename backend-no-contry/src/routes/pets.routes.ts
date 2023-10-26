import { Router } from "express";
import { createPets, findPet, findPetsByUserId, findAllPets, deletePets, updatePet } from "../controllers/pets.controllers";
import { schemaValidator } from "../utils/schemaValidator";
import { CreatePetSchema, FindPetSchema, ParamsFindPetSchema } from "../interfaces/petSchema";



const router: Router = Router()

router.post('/', schemaValidator(CreatePetSchema), createPets)
router.get('/:userId', findPetsByUserId)
router.get('/admin/:id', schemaValidator(ParamsFindPetSchema), findPet)
router.get('/', findAllPets)
router.delete('/:id', schemaValidator(ParamsFindPetSchema), deletePets)
router.put('/:id', schemaValidator(FindPetSchema), updatePet)

export default router

