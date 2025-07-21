import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('houssam')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('abcd/*')
  @Header('Cache-Control', 'no-store')
  @HttpCode(204)

  getHello(): string {
    return this.appService.getHello();
  }
}
