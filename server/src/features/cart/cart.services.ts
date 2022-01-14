import { getManager } from "typeorm";
import { CartItem } from "./cartiIem.entity"

export class CartServices {
  increment = async (productId: number, userId: number) => {
    const item = await CartItem.findOne({ userId, productId });

    const newCartItem = new CartItem();
    newCartItem.count = item.count + 1;

    await CartItem.update({ userId, productId }, newCartItem);
  }

  decrement = async (productId: number, userId: number) => {
    const item = await CartItem.findOne({ userId, productId });

    if (item.count === 0) {
      return;
    }

    const newCartItem = new CartItem();
    newCartItem.count = item.count - 1;

    await CartItem.update({ userId, productId }, newCartItem);
  }
}