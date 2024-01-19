import { Router } from "express";
import { 
    createMedicalController, 
    findMedicalController, 
    allMedicalController} from "../controllers/medical.controller";
import { schemaValidator } from "../utils/schemaValidator";
import {
    createMedicalSchema, 
    findMedicalSchema, 
    findAllMedicalSchema } from "../validator/medicalSchema";
import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router()

router.post('/', checkJWT, schemaValidator(createMedicalSchema), createMedicalController)
router.get('/', checkJWT, schemaValidator(findMedicalSchema), findMedicalController)
router.get('/:id', checkJWT, schemaValidator(findAllMedicalSchema), allMedicalController)
// router.get('/:id', allMedicalController)
// router.patch('/')



export default router

