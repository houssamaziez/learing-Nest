import { Controller, Delete, Get, Header, HttpCode, Param, Post, Put } from '@nestjs/common';
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

  @Get(':id')
  findopneParames(@Param() parames: any): string {
    return `Hello ${parames.id}`;
  }


  @Get(':id')
  findopneById(@Param() id: string): string {
    return `Hello ${id}`;
  }

  @Post()
  create(@Param() body: any): string {
    return `Hello ${body}`;
  }
  @Post(':id')
  createById(@Param() id: string): string {
    return `Hello ${id}`;
  }
  @Post(':id/:name')
  createByIdAndName(@Param() params: any): string {
    return `Hello ${params.id} and ${params.name}`;
  }
  @Put(':id')
  updateById(@Param() id: string): string {
    return `update ${id}`;
  }
  @Delete(':id')
  deleteById(@Param() id: string): string {
    return `delete ${id}`;
  }

}
