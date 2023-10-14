import { Router } from 'express';
import userRouter from './users.routes';
import authRouter from './auth.routes'


const router: Router = Router();

/**
 * Rutas
 * users (Usuarios)
 * etc...
 */
router.use('/users', userRouter)
router.use('/auth', authRouter)

export { router }