import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "../cart/cartiIem.entity";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string;

    @Column({
        nullable: false,
        type: "numeric",
        precision: 15,
        scale: 2
    })
    price: number;

    @Column({
        default: ""
    })
    image_link: string;

    @Column({
        default: ""
    })
    brand: string;

    @Column({
        default: ""
    })
    sub_brand: string

    @Column()
    category: string

    @CreateDateColumn()
    created_at

    @OneToMany(() => CartItem, cart => cart.product)
    userConnection: Promise<CartItem[]>
}