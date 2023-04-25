import { Controller, Body, Post, Get} from '@nestjs/common';
import { CartServices } from '../service/cart-service.service';
import { CartCreateDto } from '../dto/cart-create.dto';
import { CartDto } from '../dto/cart.dto';

@Controller('cart')

export class CartController{ 
    constructor(private readonly cartService: CartServices) {}

    @Post('newcart')  
        public async create(@Body() cartCreateDto: CartCreateDto){
        return await this.cartService.create(cartCreateDto);  
    }

    @Post('cartlist')
    getCarts(@Body() cartDto:CartDto){
        return this.cartService.CartListByID(cartDto);
    }

    @Post('deletecart')  
        public async delete(@Body() id: number){
        return await this.cartService.deleteCart(id);  
    }
}
