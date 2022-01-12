import { Router, Request, Response } from "express";
import categoryController from "./controllers/category";
import createController from "./controllers/create";
import getAllProducts from "./services/getAll";
const router = Router();

router.get('/:category', categoryController);

router.get('/', async (req, res) => {
    const products = await getAllProducts();
    res.send(products);
})

router.post('/create', createController);

export default router;