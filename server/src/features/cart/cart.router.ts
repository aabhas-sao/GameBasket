import { Router } from 'express';
import addItemController from './controllers/addItem';
import getCartController from './controllers/getCart';
const router = Router();

router.get('/', getCartController);
router.post('/add', addItemController);

export default router;