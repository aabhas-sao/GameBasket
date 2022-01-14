import { Request, Response } from "express";
import getcart from "../services/getcart";

const getCartController = async (req: Request, res: Response) => {
  const items = await getcart(req['user'].id);
  console.log(items);
  res.status(200).json({ items: items });
}

export default getCartController;