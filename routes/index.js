import routerx from 'express-promise-router';
import empleadosRouter from './empleado';

const router=routerx();

router.use('/empleado', empleadosRouter);

export default router;
