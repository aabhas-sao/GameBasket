import { Product } from "../product.entity";

const getProductsByCategory = async (category: string) => {
    const products = await Product.find({
        where: {
            category: category
        }
    })

    return products;
}

export default getProductsByCategory;