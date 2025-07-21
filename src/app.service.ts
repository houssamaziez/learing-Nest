import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  @Post()
  getHello(): string {
    return 'Hello Worlscs !';
  }
}
