import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { User } from "../../users/user.entity";
import { CartItem } from "../cartiIem.entity";
import getcart from "../services/getcart";

const getCartController = async (req: Request, res: Response) => {
  const connection = getConnection();
  const { userId } = req.body;
  const items = await connection
    .getRepository(CartItem)
    .createQueryBuilder('cartItem')
    .leftJoinAndSelect('cartItem.product', 'p')
    .where({ userId })
    .getMany();

  res.status(200).json({ data: items })
}

export default getCartController;