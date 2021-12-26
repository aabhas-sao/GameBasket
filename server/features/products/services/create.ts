import { Product } from "../product.entity";

const createProduct = async ({ title, image_link, price }) => {
    await Product.create({
        title,
        image_link,
        price
    }).save();
}

export default createProduct;