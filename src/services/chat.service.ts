import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { chatDto } from "src/dtos/chat.dto";
import { chatRepository } from "src/repositorys/chat.repository";

@Injectable()

export class chatService{
    constructor(@InjectRepository(chatRepository) private chatRep : chatRepository){

    }

    async createChat(data : chatDto)
    {
        return await  this.chatRep.save(data);
    }
}