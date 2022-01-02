import axios from 'axios';
import { Product } from '../features/products/product.entity';
import { createProduct } from '../features/products/services';
import data from './data.json';

const dummyDataCreator = () => {
    data.map(item => {
        createProduct({
            title: item.title,
            image_link: item.image,
            category: item.category,
            price: item.price,
            brand: item.brand,
            sub_brand: item.subBrand
        });
    })
}

export default dummyDataCreator;