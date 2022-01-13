import { Request, Response } from "express";
import { INCORRECT_PASSWORD, NO_USER_FOUND, SUCCESS } from "../services/constants";
import login from "../services/login";
import jwt from 'jsonwebtoken';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const success = await login(email, password);

  switch (success) {
    case SUCCESS:
      const user = { email: email };
      let accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
      accessToken = `BEARER ${accessToken}`;

      res.status(201).cookie("jwt", accessToken, {
        httpOnly: true
      }).send('login succesfull');
      break;
    case INCORRECT_PASSWORD:
      res.status(401).send("incorrect password")
      break;
    case NO_USER_FOUND:
      res.status(404).send("no user found, email not registered");
      break;
    default:
      res.sendStatus(500);
  }
}

export default loginController;