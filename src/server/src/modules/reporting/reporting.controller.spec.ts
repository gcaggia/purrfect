import { Test, TestingModule } from '@nestjs/testing';
import { ReportingController } from './reporting.controller';

describe('ReportingController', () => {
  let controller: ReportingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportingController],
    }).compile();

    controller = module.get<ReportingController>(ReportingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
