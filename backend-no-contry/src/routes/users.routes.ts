import { Router } from "express";
import { getAllUser, createUser, getUserById, updateUserById, deleteUserById } from "../controllers/users.controllers";

const router: Router = Router();

router.get('/', getAllUser);
router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;