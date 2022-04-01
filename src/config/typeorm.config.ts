import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { chat } from "src/entitys/chat.entity";
import { message } from "src/entitys/message.entity";
import { user } from "src/entitys/user.entity";

export const typeormConfig  : TypeOrmModuleOptions =
{
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'postgres',
    entities: [user,chat,message],
    synchronize: true,
}