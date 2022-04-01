import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userDto } from 'src/dtos/user.dto';
import { userRepository } from 'src/repositorys/user.repository';

@Injectable()
export class userService {

    constructor(@InjectRepository(userRepository) private userRep : userRepository){
        
    }
    async createUser(user : userDto)
    {
        return await this.userRep.save(user)
    }
}
