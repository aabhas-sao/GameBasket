import { getConnection } from "typeorm";
import { User } from "../../users/user.entity";

const getCart = (userId) => {
  try {
    const connection = getConnection();
    const userRepository = connection.getRepository(User);
    const cartItems = userRepository.find({ relations: ["carts"], where: { id: userId } });
    return cartItems;
  } catch (e) {

    return null;
  }
}

export default getCart;