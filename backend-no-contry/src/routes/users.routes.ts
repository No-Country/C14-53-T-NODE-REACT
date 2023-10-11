import { Router } from "express";
import { getAllUser, createUser } from "../controllers/users.controllers";

const router: Router = Router();

router.get('/', getAllUser);
router.post('/', createUser);
//router.get('/:id', userControllers.getById.bind(userControllers));
//router.patch('/:id', userControllers.updateById.bind(userControllers));
//router.delete('/:id', userControllers.deleteById.bind(userControllers));

export default router;