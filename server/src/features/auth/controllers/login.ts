import { Request, Response } from "express";
import { INCORRECT_PASSWORD, SUCCESS } from "../services/constants";
import login from "../services/login";

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const success = await login(email, password);

  switch (success) {
    case SUCCESS:
      res.status(201).send("logged in succesfully");
      break;
    case INCORRECT_PASSWORD:
      res.status(401).send("incorrect password")
      break;
    default:
      res.sendStatus(500);
  }
}

export default loginController;