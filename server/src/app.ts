import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());

app.use('/', (req: Request, res: Response): void => {
    res.send("hello");
})

app.listen(4000, () => {
    console.log('server is running on 4000');
})