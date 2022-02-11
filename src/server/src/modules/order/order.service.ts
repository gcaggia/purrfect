import { Injectable } from '@nestjs/common';
import { Order } from '@src/models/order.model';
import { AirtableService } from '@src/modules/airtable/airtable.service';

@Injectable()
export class OrderService {
  constructor(private airtableService: AirtableService) {}

  async getAll(): Promise<Order[]> {
    return this.airtableService.retrieveOrders();
  }
}
