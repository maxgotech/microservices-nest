import { IsNotEmpty } from 'class-validator';
import { ProductEntity } from '../model/product.entity';

export class CartCreateDto {

  @IsNotEmpty()
  product: ProductEntity;

  @IsNotEmpty()
  id_user: number;
}