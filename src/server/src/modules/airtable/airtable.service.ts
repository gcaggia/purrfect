import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import Airtable, { Records } from 'airtable';
import { ConfigService } from '@nestjs/config';
import { FieldSet } from 'airtable/lib/field_set';
import { Order } from '@src/models/order.model';

export const GRID_VIEW = 'Grid view';
export const ORDERS = 'Orders';

@Injectable()
export class AirtableService {
  airtableBase: Airtable.Base;

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private configService: ConfigService,
  ) {
    const apiKey = configService.get<string>('AIRTABLE_API_KEY');
    const baseId = configService.get<string>('AIRTABLE_BASE_ID');

    Airtable.configure({ apiKey });
    this.airtableBase = Airtable.base(baseId);
  }

  async retrieveOrders(): Promise<Order[]> {
    const ordersFromCache: Order[] = await this.cacheManager.get('orders');
    if (ordersFromCache) {
      return ordersFromCache;
    }

    return new Promise((resolve, reject) => {
      const orders: Order[] = [];
      this.airtableBase(ORDERS)
        .select({
          view: GRID_VIEW,
        })
        .eachPage(
          (orderRecords: Records<FieldSet>, fetchNextPage) => {
            Logger.log(`Airtable fetching ${orderRecords.length} records...`);

            orderRecords.forEach((orderRecord) => {
              const order: Order = {
                order_id: orderRecord.get('order_id') as number,
                order_placed: orderRecord.get('order_placed') as string,
                product_name: orderRecord.get('product_name') as string,
                price: orderRecord.get('price') as number,
                first_name: orderRecord.get('first_name') as string,
                last_name: orderRecord.get('last_name') as string,
                address: orderRecord.get('address') as string,
                email: orderRecord.get('email') as string,
                order_status: orderRecord.get('order_status') as string,
              };
              orders.push(order);
            });

            fetchNextPage();
          },
          async (err) => {
            if (err) {
              Logger.error(err);
              reject(err);
            }
            Logger.log(`${orders.length} records from Airtable received...`);
            await this.cacheManager.set('orders', orders);
            resolve(orders);
          },
        );
    });
  }
}
