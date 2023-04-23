import { IsNotEmpty } from 'class-validator';

export class CartCreateDto {

  @IsNotEmpty()
  id_product: number;

  @IsNotEmpty()
  id_user: number;
}