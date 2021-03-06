import { Router } from 'express';
import { CartController } from './cart.controller';
import addItemController from './controllers/addItem';
import getCartController from './controllers/getCart';
const router = Router();
const cartConroller = new CartController();

router.post('/', getCartController);
router.post('/add', addItemController);
router.patch('/increment', cartConroller.increment);
router.patch('/decrement', cartConroller.decrement);
router.delete('/', cartConroller.delete);

export default router;