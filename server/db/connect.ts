
import { createConnection } from 'typeorm';
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
        entities: [
            __dirname + "features/**/*.entity{.ts, .js}"
        ]
    }).then(connection => {
        // here you can start to work with your entities
    }).catch(error => console.log(error));
}

export default connectDb;