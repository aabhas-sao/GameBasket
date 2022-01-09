
import { createConnection } from 'typeorm';
import { Product } from '../features/products/product.entity';
import { User } from '../features/users/user.entity';
import dummyDataCreator from './dummy';

const connectDb = () => {
    createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        },
        logging: false,
        entities: [
            Product, User
        ]
    }).then(connection => {
        console.log("connected to db");
        connection.synchronize();
    }).catch(error => console.log(error));
}

export default connectDb;