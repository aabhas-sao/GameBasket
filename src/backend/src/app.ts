import express, {Request, Response, Application} from 'express';
const app:Application = express();

const PORT = process.env.PORT || 1337;

app.get('/', (req: Request, res: Response) => {
    res.send("hello");
});

app.listen(PORT, ():void => {
    console.log(`Server running on port ${PORT}`);
});