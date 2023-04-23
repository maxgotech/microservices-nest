import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './model/product.entity';
import { ProductController } from './controller/product-controller.controller';
import { ProductServices } from './service/product-services.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductController],
    providers: [ProductServices],
    exports:[ProductServices]
})
export class ProductModule {}
