import { Request, Response } from "express";
import { ITEM_ALREADY_IN_CART, SUCCESS } from "../../../../../constants/literals";
import addItem from "../services/addItem";

const addItemController = async (req: Request, res: Response) => {
  const { productId, userId } = req.body;
  console.log(productId, userId);
  const success = await addItem(productId, userId);
  console.log(success);

  switch (success.message) {
    case SUCCESS:
      return res.status(200).json(success.data);
    case ITEM_ALREADY_IN_CART:
      return res.status(403).json({ message: success.message })
    default:
      return res.sendStatus(500);
  }
}

export default addItemController;