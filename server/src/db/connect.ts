
import { createConnection } from 'typeorm';
import { Product } from '../features/products/product.entity';
import { User } from '../features/users/user.entity';
import dummyDataCreator from './dummy';

const connectDb = () => {
    return createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        },
        logging: false,
        entities: [
            Product, User
        ]
    })
}

export default connectDb;