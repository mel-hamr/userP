import { Body, Controller, Injectable, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userDto } from "src/dtos/user.dto";
import { userRepository } from "src/repositorys/user.repository";
import { userService } from "src/services/user.service";

@Controller('user')
export class userController{

    constructor(private userServ : userService){
        
    }

    @Post('add')
    @UsePipes(ValidationPipe)
    async saveUser (@Body() user : userDto)
    {
       return await this.userServ.createUser(user)
    }
}