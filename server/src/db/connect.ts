
import e from 'express';
import { createConnection } from 'typeorm';
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
                Product, User
            ]
        })
    } else {
        return createConnection({
            type: "postgres",
            username: "postgres",
            port: 5432,
            password: "123",
            synchronize: true,
            logging: true,
            database: "gamebasket",
            entities: [
                Product, User
            ]
        })
    }
}

export default connectDb;