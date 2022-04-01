import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messageDto } from 'src/dtos/message.dtp';
import { messageRepository } from 'src/repositorys/message.repository';

@Injectable()
export class messageService {

    constructor(@InjectRepository(messageRepository) private messageRep : messageRepository){
        
    }

    async getMessageById(id :number)
    {
        return await this.messageRep.findOne(id)
    }

    async createMessage(message : messageDto)
    {
        return await this.messageRep.save(message)
    }
}
