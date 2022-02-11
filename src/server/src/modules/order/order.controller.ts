import { Controller, Get, Version } from '@nestjs/common';
import { Order } from '@src/models/order.model';
import { OrderService } from '@src/modules/order/order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Version('1')
  @Get('/')
  async getAll(): Promise<Order[]> {
    return this.orderService.getAll();
  }
}
