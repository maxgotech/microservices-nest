import { ProductDto } from "src/modules/product/dto/product.dto";
import { ProductEntity } from "src/modules/product/model/product.entity";

export const toProductDto = (data: ProductEntity): ProductDto => {  
    const { id, name, url_image, id_createdBy, price, about } = data;
    let productDto: ProductDto = { id, name, url_image, id_createdBy, price, about };
    return productDto;
};