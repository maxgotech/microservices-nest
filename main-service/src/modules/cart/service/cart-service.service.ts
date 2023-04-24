import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartDto } from '../dto/Cart.dto';
import { toCartDto } from 'src/shared/mapper';
import { CartEntity } from '../model/Cart.entity';
import { CartCreateDto } from '../dto/cart-create.dto';

@Injectable()
export class CartServices { 

    constructor( @InjectRepository(CartEntity) private readonly cartRepo: Repository<CartEntity>){}

    async findOne(options?: object): Promise<CartDto> {
        const cart =  await this.cartRepo.findOne(options);    
        return toCartDto(cart);  
    }

    async create(cartDto: CartCreateDto): Promise<CartDto> {    
        const { id_product, id_user } = cartDto;   
        const cart: CartEntity = await this.cartRepo.create({ id_product, id_user });
        await this.cartRepo.save(cart);
        return toCartDto(cart);
    }

    async CartListByID({ id_user }: CartDto){
        if (id_user==null){
            return;
        } else {
        const CartList = await this.cartRepo.find({ where: { id_user } });
        return CartList;
        }
    }
}
