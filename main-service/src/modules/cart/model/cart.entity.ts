import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('cart')
export class CartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => ProductEntity,{eager:true}) @JoinColumn() 
    product: ProductEntity;

    @Column({nullable:false})
    id_user:number;

    @UpdateDateColumn()
    updatedAt:Date;
}