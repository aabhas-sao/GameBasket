
import e from 'express';
import { createConnection } from 'typeorm';
import { CartItem } from '../features/cart/cartiIem.entity';
import { Product } from '../features/products/product.entity';
import { User } from '../features/users/user.entity';

const connectDb = () => {
    if (process.env.NODE_ENV === "production") {
        return createConnection({
            type: "postgres",
            url: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            },
            logging: false,
            entities: [
                Product, User, CartItem
            ]
        })
    } else {
        return createConnection({
            type: "postgres",
            username: "postgres",
            port: 5432,
            password: "123",
            synchronize: false,
            logging: false,
            database: "gamebasket",
            entities: [
                Product, User, CartItem
            ]
        })
    }
}

export default connectDb;