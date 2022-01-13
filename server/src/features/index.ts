import { Router } from 'express'
import productRouter from './products/product.router'
import authRouter from './auth/auth.router'
const router = Router();

router.use('/products', productRouter);
router.use('/auth', authRouter);

export default router;