import { Product } from "../product.entity"

const getProductById = async (id) => {
  const product = await Product.findOne(id);
  return product;
}

export default getProductById;