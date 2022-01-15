import { Request, Response } from "express"
import { CartServices } from "./cart.services";

const cartServices = new CartServices();

export class CartController {
  increment = async (req: Request, res: Response) => {
    const { productId, userId } = req.body;
    await cartServices.increment(productId, userId);
    res.json({ message: "increment", productId, userId });
  }

  decrement = async (req: Request, res: Response) => {
    const { productId, userId } = req.body;
    await cartServices.decrement(productId, userId);
    res.json({ message: "decrement", productId, userId });
  }

  delete = async (req: Request, res: Response) => {
    const { productId, userId } = req.body;
    await cartServices.delete(productId, userId);
    res.json({ message: "item removed from cart", productId, userId });
  }
}