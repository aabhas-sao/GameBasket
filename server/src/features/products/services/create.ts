import { getConnection } from "typeorm";
import { CartItem } from "../../cart/cartiIem.entity";
import { Product } from "../product.entity";

type ProductType = {
    title: string;
    image_link: string;
    price: number;
    category: string;
    brand: string;
    sub_brand: string;
}

const createProduct = async ({ title, image_link, price, category, brand, sub_brand }: ProductType) => {
    await Product.create({
        title,
        image_link,
        price,
        category,
        brand,
        sub_brand,
    }).save();
}

export default createProduct;