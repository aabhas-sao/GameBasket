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
    const connection = getConnection();

    const product = await Product.create({
        title,
        image_link,
        price,
        category,
        brand,
        sub_brand,
    }).save();

    const cartItem = new CartItem();
    cartItem.product = product;
    cartItem.inventory = Math.floor(Math.random() * 99) + 1;
    await connection.manager.save(cartItem);
}

export default createProduct;