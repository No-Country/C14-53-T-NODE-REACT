import { Router } from "express";
import { loginControler, registerControler } from "../controllers/auth.controller";


const router = Router();

router.post('/register', registerControler);
router.post('/login', loginControler);

export default router