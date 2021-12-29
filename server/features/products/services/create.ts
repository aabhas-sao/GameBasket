import { Product } from "../product.entity";

type ProductType = {
    title: string;
    image_link: string;
    price: number;
    category: string;
}

const createProduct = async ({ title, image_link, price, category }: ProductType) => {
    await Product.create({
        title,
        image_link,
        price,
        category
    }).save();
}

export default createProduct;