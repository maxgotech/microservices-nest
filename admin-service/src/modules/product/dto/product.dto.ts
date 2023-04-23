import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  url_image:string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  id_createdBy: number;

  createdAt?: Date;

  updatedAt?: Date;
}