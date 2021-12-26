import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string;

    @Column({
        nullable: false
    })
    price: number;

    @Column({
        default: ""
    })
    image_link: string;

    @CreateDateColumn()
    created_at

}