import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import createConnection from './db/connect';
import cors from 'cors';
import productRouter from './features/products/product.router';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

createConnection();

app.use('/products', productRouter)

app.use('/', (req: Request, res: Response): void => {
    res.send("hello");
})


app.listen(4000, () => {
    console.log('server is running on 4000');
})