import { Router } from "express";

import { schemaValidator } from "../utils/schemaValidator";
import { CreateTypeSupplierSchema, FindTypeSupplierSchema } from "../interfaces/typeSupplierSchema";
import { createType, findType, findAllTypes, deleteType} from "../controllers/typeSupplier.controllers";



const router: Router = Router()

router.post('/', schemaValidator(CreateTypeSupplierSchema), createType )
router.get('/:id',schemaValidator(FindTypeSupplierSchema), findType)
router.get('/', findAllTypes)
router.delete('/:id',schemaValidator(FindTypeSupplierSchema), deleteType)
// router.put('/:id',schemaValidator(FindTypeSupplierSchema), updateType)

export default router
