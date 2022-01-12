import e, { Router, Request, Response } from "express";
import categoryController from "./controllers/category";
import createController from "./controllers/create";
import getByIdController from "./controllers/getByIdController";
import getAllProducts from "./services/getAll";
import getProductById from "./services/getById";
const router = Router();

router.get('/:category', categoryController);

router.get('/', getByIdController);

router.get('/', async (req, res) => {
    const products = await getAllProducts();
    res.send(products);
})

router.post('/create', createController);

export default router;