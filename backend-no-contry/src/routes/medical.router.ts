import { Router } from "express";
import { 
    createMedicalController, 
    findMedicalController, 
    allMedicalController} from "../controllers/medical.controller";
import { schemaValidator } from "../utils/schemaValidator";
import {createMedicalSchema, findMedicalSchema } from "../validator/medicalSchema";
import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router()

router.post('/', checkJWT, schemaValidator(createMedicalSchema), createMedicalController)
router.get('/', checkJWT, schemaValidator(findMedicalSchema), findMedicalController)
router.get('/all', checkJWT, schemaValidator(findMedicalSchema), allMedicalController)
router.get('/:id', allMedicalController)
router.get('/')



export default router

