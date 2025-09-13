import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard)
  getHello() {
    return {
      message: 'Hello World!',
    };
  }
}
