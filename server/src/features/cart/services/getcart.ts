import { getConnection } from "typeorm";
import { User } from "../../users/user.entity";

const getCart = () => {
  try {
    const connection = getConnection();
    const userRepository = connection.getRepository(User);
    const cartItems = userRepository.find({ relations: ["cart"] });
    return cartItems;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default getCart();