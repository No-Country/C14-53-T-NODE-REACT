import { Router } from 'express';
import userRouter from './users.routes';


const router: Router = Router();

/**
 * Rutas
 * users (Usuarios)
 * etc...
 */
router.use('/users', userRouter)

export { router }