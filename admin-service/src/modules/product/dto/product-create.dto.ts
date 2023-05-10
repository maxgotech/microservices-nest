import { IsNotEmpty } from 'class-validator';

export class ProductCreateDto {
  @IsNotEmpty()
  name: string;

  url_image:string;

  about:string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  id_createdBy: number;
}