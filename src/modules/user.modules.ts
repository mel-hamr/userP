import { Module } from "@nestjs/common/decorators/modules";
import { TypeOrmModule } from "@nestjs/typeorm";
import { chatContoller } from "src/controllers/chat.controller";
import { messageController } from "src/controllers/message.controller";
import { userController } from "src/controllers/user.contorller";
import { chatRepository } from "src/repositorys/chat.repository";
import { messageRepository } from "src/repositorys/message.repository";
import { userRepository } from "src/repositorys/user.repository";
import { chatService } from "src/services/chat.service";
import { messageService } from "src/services/message.service";
import { userService } from "src/services/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([userRepository,chatRepository,messageRepository])],
    controllers: [userController,chatContoller,messageController],
    providers: [userService,chatService,messageService]
  })
export class userModules{
    
}