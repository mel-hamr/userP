import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { chatDto } from "src/dtos/chat.dto";
import { chatRepository } from "src/repositorys/chat.repository";
import { chatService } from "src/services/chat.service";

@Controller('chat')
export class chatContoller{
    constructor( private chatServ : chatService){

    }

    @Post('add')
    @UsePipes(ValidationPipe)
    async saveChat (@Body() chat : chatDto) 
    {
       return await  this.chatServ.createChat(chat);
    }
}