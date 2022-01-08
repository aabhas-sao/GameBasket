
import { createConnection } from 'typeorm';
import { Product } from '../features/products/product.entity';
import { User } from '../features/users/user.entity';
import dummyDataCreator from '../db/dummy';
import config from '../ormconfig.json';

const connectDb = () => {
    createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "123",
        database: "gamebasket",
        synchronize: true,
        logging: true,
        entities: [
            Product, User
        ]
    }).then(connection => {
        // here you can start to work with your entities
        connection.synchronize(true).then(() => {
            dummyDataCreator();
        })

    }).catch(error => console.log(error));
}

export default connectDb;