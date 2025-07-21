import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('houssam')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("aziez")
  getHello(): string {
    return this.appService.getHello();
  }
}
