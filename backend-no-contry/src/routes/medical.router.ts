import { Router } from "express";
import { createMedicalController, findMedicalController, findAllMedicalController } from "../controllers/medical.controller";
import { schemaValidator } from "../utils/schemaValidator";
import {CreateMedicalSchema, ParamsMedicalSchema, MedicalSchema } from "../validator/medicalSchema";
import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router()

router.post('/', checkJWT, schemaValidator(CreateMedicalSchema), createMedicalController)
router.get('/:id', schemaValidator(ParamsMedicalSchema), findMedicalController)
router.get('/', schemaValidator(MedicalSchema), findAllMedicalController)


export default router

