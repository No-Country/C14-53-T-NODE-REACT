import { Router } from "express";
import { 
    createMedicalController, 
    findMedicalController, 
    allMedicalController} from "../controllers/medical.controller";
import { schemaValidator } from "../utils/schemaValidator";
import {CreateMedicalSchema, QueryMedicalSchema } from "../validator/medicalSchema";
import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router()

router.post('/', checkJWT, schemaValidator(CreateMedicalSchema), createMedicalController)
router.get('/', checkJWT, schemaValidator(QueryMedicalSchema), findMedicalController)
router.get('/', checkJWT, allMedicalController)



export default router

