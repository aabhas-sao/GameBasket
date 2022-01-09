import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import createConnection from './db/connect';
import cors from 'cors';
require('dotenv').config();
import productRouter from './features/products/product.router';

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

createConnection();

app.use('/products', productRouter)

app.use('/', (req: Request, res: Response): void => {
    res.send("hello");
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})