import { Request, Response } from "express";
import getProductsByCategory from "../services/getByCategory";

const categoryController = async (req: Request, res: Response) => {
    const { category } = req.params;
    const products = await getProductsByCategory(category);
    res.send(products);
}

export default categoryController;