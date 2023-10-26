import { Router } from "express";
import { loginControler, profileUser, registerControler } from "../controllers/auth.controller";
import { validateToken } from "../middleware/validateToken.middleware";


const router = Router();

router.post('/register', registerControler);
router.post('/login', loginControler);
router.get('/profile', validateToken, profileUser)

export default router