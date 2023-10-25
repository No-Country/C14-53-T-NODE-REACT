import { Router } from "express";
import { createMedicalController, findMedicalController, findAllMedicalController } from "../controllers/medical.controller";
import { schemaValidator } from "../utils/schemaValidator";
import {CreateMedicalSchema, ParamsMedicalSchema, MedicalSchema } from "../interfaces/medicalSchema";

const router: Router = Router()

router.post('/', schemaValidator(CreateMedicalSchema), createMedicalController)
router.get('/:id', schemaValidator(ParamsMedicalSchema), findMedicalController)
router.get('/', schemaValidator(MedicalSchema), findAllMedicalController)


export default router

