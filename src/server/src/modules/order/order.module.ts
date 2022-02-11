import { CacheModule, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { AirtableService } from '@src/modules/airtable/airtable.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [CacheModule.register()],
  providers: [ConfigService, OrderService, AirtableService],
  controllers: [OrderController],
})
export class OrderModule {}
