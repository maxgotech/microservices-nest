import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  secondname: string;

  @IsNotEmpty()
  @IsEmail()
  mail: string;
  
  type: string;

  createdAt?: Date;

  updatedAt?: Date;
}