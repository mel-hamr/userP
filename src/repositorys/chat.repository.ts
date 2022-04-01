import { chat } from "src/entitys/chat.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(chat)

export class chatRepository extends Repository<chat> {

}