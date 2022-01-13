import { Request, Response } from "express";
import { INCORRECT_PASSWORD, SUCCESS } from "../services/constants";
import login from "../services/login";
import jwt from 'jsonwebtoken';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const success = await login(email, password);

  switch (success) {
    case SUCCESS:
      const user = { email: email };
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });

      res.status(200).cookie("jwt", accessToken, {
        httpOnly: true
      }).send('login succesfull');
      break;
    case INCORRECT_PASSWORD:
      res.status(401).send("incorrect password")
      break;
    default:
      res.sendStatus(500);
  }
}

export default loginController;