import { CartController } from './controller/cart.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './model/cart.entity';
import { CartServices } from './service/cart-service.service';

@Module({
    imports: [TypeOrmModule.forFeature([CartEntity])],
    controllers: [CartController,],
    providers: [CartServices],
    exports:[CartServices]
})
export class CartModule { }
