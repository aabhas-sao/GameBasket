import { Request, Response } from "express";
import signup from "../services/signup";

const signupController = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, email, password)
  const success = await signup(firstName, lastName, email, password);

  switch (success) {
    case "SUCCESS":
      res.status(201).send("account created successfully");
      break;
    case "USER_EXISTS":
      res.status(401).send("account exists already");
      break;
  }
}

export default signupController;