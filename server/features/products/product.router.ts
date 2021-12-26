import { Router, Request, Response } from "express";
import createController from "./controllers/create";
import getAllProducts from "./services/getAll";
const router = Router();

router.get('/', async (req, res) => {
    const products = await getAllProducts();
    console.log(products);
    res.send(products);
})

router.post('/create', createController);

export default router;