import { InjectRepository } from "@nestjs/typeorm";
import { message } from "src/entitys/message.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(message)

export class messageRepository extends Repository<message> {

}