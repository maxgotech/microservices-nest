import { ProductCreateDto } from '../dto/product-create.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from '../dto/product.dto';
import { toProductDto } from 'src/shared/mapper';
import { ProductEntity } from '../model/product.entity';

@Injectable()
export class ProductServices { 

    constructor( @InjectRepository(ProductEntity) private readonly productRepo: Repository<ProductEntity>){}

    async findOne(options?: object): Promise<ProductDto> {
        const product =  await this.productRepo.findOne(options);    
        return toProductDto(product);  
    }

    async create(productDto: ProductCreateDto): Promise<ProductDto> {    
        const { name, price , id_createdBy, url_image, about  } = productDto;
        
        // check if the study exists in the db    
        const productInDb = await this.productRepo.findOne({ 
            where: { name } 
        });
        if (productInDb) {
            throw new HttpException('Study already exists', HttpStatus.BAD_REQUEST);    
        }
        
        const product: ProductEntity = await this.productRepo.create({ name, price , id_createdBy, url_image, about });
        await this.productRepo.save(product);
        return toProductDto(product);
    }

    async ProductList(){
        const StudyList = await this.productRepo.find();
        return StudyList.reverse();
    }
}
