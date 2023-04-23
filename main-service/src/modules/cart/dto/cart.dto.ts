import { IsNotEmpty } from 'class-validator';

export class CartDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  id_product: number;

  @IsNotEmpty()
  id_user: number;

  updatedAt?: Date;
}