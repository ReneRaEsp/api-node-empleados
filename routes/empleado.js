import routerx from 'express-promise-router';
import empleadoController from '../controllers/EmpleadoController';

const router=routerx();

router.post('/add', empleadoController.add);

router.get('/list', empleadoController.list);

router.put('/update', empleadoController.update);

export default router;
