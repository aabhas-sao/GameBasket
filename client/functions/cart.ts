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

  if (!items || items.size === 0) return;
  console.log(items);
  const reduxItems = items.map(({ count, __product__ }: any) => ({
    count,
    product: {
      id: __product__.id,
      image: __product__.image_link,
      price: __product__.price,
      title: __product__.title,
    },
  }));

  return reduxItems;
}

export default getCart;