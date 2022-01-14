import { getConnection } from "typeorm";
import { SUCCESS } from "../../auth/services/constants";
import { Product } from "../../products/product.entity";
import { User } from "../../users/user.entity";
import { CartItem } from "../cartiIem.entity";
import { ITEM_ALREADY_IN_CART } from '../../../../../constants/literals';

const addItem = async (productId, userId) => {
  const item = await CartItem.find({
    relations: ['user', 'product'],
    where: {
      productId,
      userId
    }
  })

  if (item.length === 0) {
    const item = await CartItem.create({
      userId,
      productId,
      count: 0,
    }).save();

    return { message: SUCCESS, data: item }
  } else {
    return { message: ITEM_ALREADY_IN_CART }
  }
}

export default addItem;