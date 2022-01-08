import { Request, Response } from 'express'
import { createProduct } from '../services';

const createController = (req: Request, res: Response) => {
    const data = req.body;
    createProduct(data);
    res.send(200);
}

export default createController;