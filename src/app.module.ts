import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestControllerController } from './test-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, TestControllerController, TestControllerController],
  providers: [AppService],
})
export class AppModule { }
