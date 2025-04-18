import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { Cache } from 'cache-manager'

@Injectable()
export class AppService {
  constructor(
    @Inject('CACHE_MANAGER') private readonly cacheManager: Cache,
    private readonly httpService: HttpService,
  ) {}

  async getCoins() {
    const cachedCoins = await this.cacheManager.get('coins');
    if (cachedCoins) {
      return cachedCoins;
    }
    const coins = this.httpService
      .get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': 'bfd2c855-f2a9-4906-8149-be30d0cdde75',
          },
        },
      )
      .pipe(
        map((res) => {
          const data = res.data.data;
          return data;
        }),
      );
    await this.cacheManager.set(
      'coins',
      await firstValueFrom(coins),
      60 * 1000,
    );
    return coins;
  }

  async getCoin(symbol: string) {
    const cachedCoin = await this.cacheManager.get(`coin-${symbol}`);
    if (cachedCoin) {
      return cachedCoin;
    }
    const coin = this.httpService
      .get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': 'bfd2c855-f2a9-4906-8149-be30d0cdde75',
          },
        },
      )
      .pipe(
        map((res) => {
          const data = res.data.data;
          return data.find( e => e.symbol === symbol.toUpperCase() );
        }),
      );
    await this.cacheManager.set(
      `coin-${symbol}`,
      await firstValueFrom(coin),
      60 * 1000,
    );
    return coin;
  }
}
