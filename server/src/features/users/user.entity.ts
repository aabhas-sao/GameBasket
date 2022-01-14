import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Index, ManyToMany, JoinTable } from "typeorm";
import { CartItem } from "../cart/cartiIem.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Index({ unique: true })
    @Column({
        nullable: false,
    })
    email: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    hash: string

    @Column({ nullable: true })
    address: string

    @ManyToMany(() => CartItem)
    @JoinTable()
    cart: CartItem[]
}