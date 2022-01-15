import axios from "axios";
import baseUrl from "../constants/routes";

const getCart = async (id: number) => {
  const cart = await axios.post(
    `${baseUrl}/cart`,
    {
      userId: id,
    },
    {
      withCredentials: true,
    }
  );
  const items = cart.data.data;

  const reduxItems = items.map(({ count, product }: any) => ({
    count,
    product: {
      id: product.id,
      image: product.image_link,
      price: product.price,
      title: product.title,
    },
  }));

  return reduxItems;
}

export default getCart;