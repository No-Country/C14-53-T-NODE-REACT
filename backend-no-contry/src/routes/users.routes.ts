import { Router } from "express";
import UserControllers from "../controllers/users.controllers";

const router: Router = Router();
const userControllers = new UserControllers();

router.post('/', userControllers.create.bind(userControllers));
router.get('/', userControllers.getAll.bind(userControllers));
router.get('/:id', userControllers.getById.bind(userControllers));
router.patch('/:id', userControllers.updateById.bind(userControllers));
router.delete('/:id', userControllers.deleteById.bind(userControllers));

export default router;