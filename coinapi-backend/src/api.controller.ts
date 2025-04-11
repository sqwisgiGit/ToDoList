import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getCoins() {
    return this.apiService.getCoins();
  }

  @Get('test')
  testCoin() {
    return this.apiService.testCoin();
  }

  @Get(':symbol')
  getCoin(@Param('symbol') symbol: string) {
    return this.apiService.getCoin(symbol);
  }
}
