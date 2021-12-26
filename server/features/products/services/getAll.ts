import { Request, Response } from 'express'
import { createProduct } from '.';
import { Product } from '../product.entity';

const getAllProducts = async () => {
    const products = await Product.find();
    return products;
}

export default getAllProducts;