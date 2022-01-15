import { getConnection } from "typeorm";
import { ITEM_ALREADY_IN_CART, SUCCESS } from "../../auth/services/constants";
import { Product } from "../../products/product.entity";
import { User } from "../../users/user.entity";
import { CartItem } from "../cartiIem.entity";

const addItem = async (productId, userId) => {
  const item = await CartItem.findOne({ productId, userId });
  console.log(item);
  if (!item) {
    const item = await CartItem.create({
      userId,
      productId,
    }).save();

    return { message: SUCCESS, data: item }
  } else {
    return { message: ITEM_ALREADY_IN_CART }
  }
}

export default addItem;