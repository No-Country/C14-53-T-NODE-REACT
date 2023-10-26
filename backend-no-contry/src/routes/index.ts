import { Router } from 'express';
import userRouter from './users.routes';
import petsRouter from './pets.routes'
import typeSupplierRouter from './typeSupplier.router';
import supplirRouter from './supplier.router';
import authRouter from './auth.routes';
import medicalRouter from './medical.router'
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
router.use('/types', typeSupplierRouter)
router.use('/supplier', supplirRouter)
router.use('/medical', medicalRouter)
router.use('/calendar', calendarRouter)

export { router }