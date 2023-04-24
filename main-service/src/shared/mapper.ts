import { UserEntity } from "../modules/user/model/user.entity";
import { UserDto } from "../modules/user/dto/user.dto";
import { CartEntity } from "src/modules/cart/model/cart.entity";
import { CartDto } from "src/modules/cart/dto/cart.dto";

export const toUserDto = (data: UserEntity): UserDto => {  
    const { id, name, secondname, mail, type } = data;
    let userDto: UserDto = { id, name, secondname, mail, type };
    return userDto;
};

export const toCartDto = (data: CartEntity): CartDto => {  
    const { id, product, id_user } = data;
    let cartDto: CartDto = { id, product, id_user  };
    return cartDto;
};