import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cart')
export class CartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    id_product:number;

    @Column({nullable:false})
    id_user:number;

    @UpdateDateColumn()
    updatedAt:Date;
}