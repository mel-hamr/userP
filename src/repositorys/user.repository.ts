import { user } from "src/entitys/user.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(user)

export class userRepository extends Repository<user> {

}