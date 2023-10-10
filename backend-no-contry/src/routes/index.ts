import { Router } from 'express';
import userRouter from './users.routes';


const router: Router = Router();

/**
 * Rutas
 * Usuarios
 * etc...
 */
router.use('/users', userRouter)

export default router;