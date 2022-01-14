import { Router } from 'express'
import productRouter from './products/product.router'
import authRouter from './auth/auth.router'
import cartRouter from './cart/cart.router'
import authenticateToken from './auth/middleware/authenticateToken';
const router = Router();

router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/cart', authenticateToken, cartRouter);

export default router;