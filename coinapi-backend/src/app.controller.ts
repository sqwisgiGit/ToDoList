import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCoins() {
    return this.appService.getCoins();
  }

  @Get(':symbol')
  getCoin(@Param('symbol') symbol: string) {
    return this.appService.getCoin(symbol);
  }
}
