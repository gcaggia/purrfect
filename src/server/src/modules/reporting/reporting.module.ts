import { CacheModule, Module } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { ReportingController } from './reporting.controller';
import { ConfigService } from '@nestjs/config';
import { OrderService } from '@src/modules/order/order.service';
import { AirtableService } from '@src/modules/airtable/airtable.service';

@Module({
  imports: [CacheModule.register()],
  providers: [ConfigService, OrderService, AirtableService, ReportingService],
  controllers: [ReportingController],
})
export class ReportingModule {}
