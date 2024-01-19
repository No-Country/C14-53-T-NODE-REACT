import { Router } from "express";
import { 
    getAllUser, 
    getUserById, 
    updateUserById, 
    deleteUserById,
    uploadUserImage
    } from "../controllers/users.controllers";
import { adminProfile } from "../middleware/adminSession.middleware";
import { validateUser } from "../middleware/validateUser.middleware";
//import { checkJWT } from "../middleware/session.middleware";

const router: Router = Router();

router.get('/', adminProfile, getAllUser);
router.get('/:id', validateUser, getUserById);
router.patch('/:id', validateUser, updateUserById);
router.delete('/:id', validateUser, deleteUserById);

router.patch('/image/:id', validateUser, uploadUserImage)

export default router;