import { Router } from 'express';
import userRouter from './users.routes';
import authRouter from './auth.routes'
import { checkJWT } from '../middleware/session.middleware';


const router: Router = Router();

/**
 * Rutas
 * users (Usuarios)
 * etc...
 */
router.use('/users', checkJWT, userRouter)
router.use('/auth', authRouter)

export { router }