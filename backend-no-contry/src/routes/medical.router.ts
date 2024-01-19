import { Router } from "express";
import { 
    createMedicalController, 
    findMedicalController, 
    allMedicalController,
    modifyMedicalController} from "../controllers/medical.controller";
import { schemaValidator } from "../utils/schemaValidator";
import {
    createMedicalSchema, 
    findMedicalSchema, 
    findAllMedicalSchema,
    updateMedicalSchema } from "../validator/medicalSchema";
import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router()

router.post('/', checkJWT, schemaValidator(createMedicalSchema), createMedicalController)
router.get('/', checkJWT, schemaValidator(findMedicalSchema), findMedicalController)
router.get('/:id', checkJWT, schemaValidator(findAllMedicalSchema), allMedicalController)
router.patch('/:id', checkJWT, schemaValidator(updateMedicalSchema), modifyMedicalController)



export default router

