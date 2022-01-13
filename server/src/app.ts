import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import createConnection from './db/connect';
import cors from 'cors';
require('dotenv').config();
import indexRouter from './features/';

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.use('/', indexRouter);

createConnection().then((con) => {
    con.synchronize();
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    })
})