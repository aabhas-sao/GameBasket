import { Product } from "../product.entity";

const createProduct = async ({ props }) => {
    await Product.create(props);
}

export default createProduct;