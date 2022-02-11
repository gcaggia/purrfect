import { Injectable } from '@nestjs/common';
import { AirtableService } from '@src/modules/airtable/airtable.service';
import { Order } from '@src/models/order.model';
import { Dashboard } from '@src/models/reporting.model';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

const DATE_FORMAT = ['DD/MM/YYYY', 'D/MM/YYYY'];

const IN_PROGRESS = 'in_progress';

@Injectable()
export class ReportingService {
  constructor(private airtableService: AirtableService) {}

  async dashboard(): Promise<Dashboard> {
    const orders: Order[] = await this.airtableService.retrieveOrders();

    return {
      ordersTotal: orders.length,
      ordersTotalCurrentMonth: orders.filter((order) =>
        dayjs(order.order_placed, DATE_FORMAT).isBetween(
          dayjs().startOf('month'),
          dayjs().endOf('month'),
        ),
      ).length,
      ordersTotalInProgress: orders.filter(
        (order) => order.order_status === IN_PROGRESS,
      ).length,
      revenue: orders.reduce((sum, order) => sum + order.price, 0),
      ordersLatest: orders
        .sort((o, n) =>
          dayjs(o.order_placed, DATE_FORMAT).diff(
            dayjs(n.order_placed, DATE_FORMAT),
          ),
        )
        .slice(0, 10),
    };
  }
}
