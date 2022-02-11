import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirtableModule } from '@src/modules/airtable/airtable.module';
import { OrderModule } from '@src/modules/order/order.module';
import { ReportingModule } from '@src/modules/reporting/reporting.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register(),
    OrderModule,
    AirtableModule,
    ReportingModule,
  ],
})
export class AppModule {}
