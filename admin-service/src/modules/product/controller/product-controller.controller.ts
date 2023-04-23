import { Controller, Body, Post, Get} from '@nestjs/common';
import { ProductServices } from '../service/product-services.service';
import { ProductCreateDto } from '../dto/product-create.dto';
import { NewProductStatus } from '../interfaces/NewProduct.interface';

@Controller('product')

export class ProductController{ 
    constructor(private readonly productService: ProductServices) {}

    @Post('newproduct')  
        public async create(@Body() productCreateDto: ProductCreateDto): Promise<NewProductStatus> {
        return await this.productService.create(productCreateDto);  
    }

    @Post('productlist')
    getProduct(){
        return this.productService.ProductList();
    }
}
