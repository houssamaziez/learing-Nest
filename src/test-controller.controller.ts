import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class TestControllerController {

    @Get('test')
    findAll(): string {
        return ' test controller is working';
    }
}
