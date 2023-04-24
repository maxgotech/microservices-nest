import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn,OneToOne, JoinColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('cart')
export class CartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => ProductEntity) @JoinColumn() 
    product: ProductEntity;

    @Column({nullable:false})
    id_user:number;

    @UpdateDateColumn()
    updatedAt:Date;
}