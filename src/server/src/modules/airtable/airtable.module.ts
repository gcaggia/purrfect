import { CacheModule, Module } from '@nestjs/common';
import { AirtableService } from './airtable.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [CacheModule.register()],
  providers: [ConfigService, AirtableService],
})
export class AirtableModule {}
