import { Router } from "express";
import { createSupplier } from "../controllers/supplier.controller";
import { schemaValidator } from "../utils/schemaValidator";
import { CreateSupplierSchema } from "../interfaces/supplierSchema";



const router: Router = Router()

router.post('/', schemaValidator(CreateSupplierSchema), createSupplier )
// router.get('/:id',schemaValidator(FindPetSchema), findPet)
// router.get('/', findAllPets)
// router.delete('/:id',schemaValidator(FindPetSchema), deletePets)
// router.put('/:id',schemaValidator(FindPetSchema), updatePet)

export default router
