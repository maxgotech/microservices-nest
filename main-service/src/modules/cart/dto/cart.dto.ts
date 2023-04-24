import { IsNotEmpty } from 'class-validator';
import { ProductEntity } from '../model/product.entity';

export class CartDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  product: ProductEntity;

  @IsNotEmpty()
  id_user: number;

  updatedAt?: Date;
}