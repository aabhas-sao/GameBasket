import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Product } from "../products/product.entity";
import { User } from "../users/user.entity";

@Entity()
@Index(['productId', 'userId'], { unique: true })
export class CartItem extends BaseEntity {
  @PrimaryColumn()
  productId: number;

  @PrimaryColumn()
  userId: number;

  @Column({ default: 1 })
  count: number;

  @ManyToOne(() => Product, product => product.userConnection, { primary: true })
  @JoinColumn({ name: "productId" })
  product: Promise<Product>

  @ManyToOne(() => User, user => user.productConnection, { primary: true })
  @JoinColumn({ name: "userId" })
  user: Promise<User>
}