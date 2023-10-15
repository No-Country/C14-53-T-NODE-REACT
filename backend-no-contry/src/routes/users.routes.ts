import { Router } from "express";
import { getAllUser, getUserById, updateUserById, deleteUserById } from "../controllers/users.controllers";
//import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router();

// router.post('/', createUser);
router.get('/', getAllUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;