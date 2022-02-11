import { Order } from '@src/models/order.model';

export interface Dashboard {
  ordersTotal: number;
  ordersTotalCurrentMonth: number;
  ordersTotalInProgress: number;
  revenue: number;
  ordersLatest: Order[];
}
