import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './config/typeorm.config';
import { userModules } from './modules/user.modules';

@Module({
  imports: [userModules,TypeOrmModule.forRoot(typeormConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
