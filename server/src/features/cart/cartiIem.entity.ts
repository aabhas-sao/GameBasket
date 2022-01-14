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

  @ManyToOne(() => Product, product => product.userConnection)
  @JoinColumn({ name: "productId" })
  product: Product

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User
}