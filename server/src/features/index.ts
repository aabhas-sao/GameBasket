import { Router } from 'express'
import productRouter from './products/product.router'
import authRouter from './auth/auth.router'
import authenticateToken from './auth/middleware/authenticateToken';
const router = Router();

router.use('/products', authenticateToken, productRouter);
router.use('/auth', authRouter);

export default router;