import { Router } from 'express';
import userRouter from './users.routes';
import petsRouter from './pets.routes'


const router: Router = Router();

/**
 * Rutas
 * users (Usuarios)
 * etc...
 */
router.use('/users', userRouter)
router.use('/pets', petsRouter)

export { router }