import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { messageDto } from "src/dtos/message.dtp";
import { messageRepository } from "src/repositorys/message.repository";
import { messageService } from "src/services/message.service";

@Controller('message')
export class messageController{
    constructor( private messageServ : messageService){
        
    }
    @Post('add')
    @UsePipes(ValidationPipe)
    async saveMessage (@Body() message : messageDto) 
    {
        const sender = await this.messageServ.getMessageById(message.senderId);
        const reciver = await this.messageServ.getMessageById(message.senderId);
      return  await this.messageServ.createMessage(message)
    }
}