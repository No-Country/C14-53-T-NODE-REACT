import { Router } from 'express';
import userRouter from './users.routes';
import petsRouter from './pets.routes'
import authRouter from './auth.routes'
import calendarRouter from './calendar.routes'
import { checkJWT } from '../middleware/session.middleware';



const router: Router = Router();

/**
 * Rutas
 * users (Usuarios)
 * etc...
 */
//router.use('/users', userRouter)
router.use('/pets', petsRouter)
router.use('/users', checkJWT, userRouter)
router.use('/auth', authRouter)
router.use('/calendar', calendarRouter)

export { router }