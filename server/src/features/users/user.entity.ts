import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, BaseEntity, Index } from "typeorm";

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
}