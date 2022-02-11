import { Order } from './order.model';

export interface DashboardData {
  ordersTotal: number;
  ordersTotalCurrentMonth: number;
  ordersTotalInProgress: number;
  revenue: number;
  ordersLatest: Order[];
}
