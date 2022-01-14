require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import createConnection from './db/connect';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import indexRouter from './features/';
import dummyDataCreator from './db/dummy';

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    credentials: true,
    origin: (process.env.NODE_ENV === "production") ? "https://game-basket.vercel.app" : "http://localhost:3000"
}));

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/', indexRouter);

createConnection().then((con) => {
    con.synchronize();
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    })
})