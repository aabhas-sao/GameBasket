import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../users/user.entity";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'] || req.cookies.jwt;
  const token = authHeader && authHeader.split(' ')[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, res) => {
    if (err) {
      return res.sendStatus(403);
    }

    const user = await User.find({ where: { email: res.email } });

    req['user'] = user[0];
    next();
  })
}

export default authenticateToken;