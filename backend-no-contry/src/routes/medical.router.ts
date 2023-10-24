import { Router } from "express";
import { createMedicalController, findMedicalController } from "../controllers/medical.controller";
import { schemaValidator } from "../utils/schemaValidator";
import {CreateMedicalSchema, ParamsMedicalSchema } from "../interfaces/medicalSchema";

const router: Router = Router()

router.post('/', schemaValidator(CreateMedicalSchema), createMedicalController)
router.get('/:id', schemaValidator(ParamsMedicalSchema), findMedicalController)


export default router

