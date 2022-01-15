import { getConnection } from "typeorm";
import { User } from "../../users/user.entity";

const getCart = (userId) => {
  try {
    const cartItems = User.findOne(userId, { relations: ['productConnection'] });
    console.log(cartItems);
    return cartItems;
  } catch (e) {

    return null;
  }
}

export default getCart;