import { Router } from "express";
import { 
    getAllUser, 
    getUserById, 
    updateUserById, 
    deleteUserById
    } from "../controllers/users.controllers";
import { adminProfile } from "../middleware/adminSession.middleware";
import { validateUser } from "../middleware/validateUser.middleware";
//import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router();

// router.post('/', createUser);
router.get('/', adminProfile, getAllUser);
router.get('/:id', validateUser, getUserById);
router.patch('/:id', validateUser, updateUserById);
router.delete('/:id', validateUser, deleteUserById);

router.patch('/image')

export default router;