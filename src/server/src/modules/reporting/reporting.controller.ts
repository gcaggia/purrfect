import { Controller, Get, Version } from '@nestjs/common';
import { ReportingService } from '@src/modules/reporting/reporting.service';
import { Dashboard } from '@src/models/reporting.model';

@Controller('reporting')
export class ReportingController {
  constructor(private reportingService: ReportingService) {}
  @Version('1')
  @Get('/dashboard')
  async dashboard(): Promise<Dashboard> {
    return this.reportingService.dashboard();
  }
}
