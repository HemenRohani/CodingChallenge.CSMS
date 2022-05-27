import { Test, TestingModule } from '@nestjs/testing';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';

describe('RateController', () => {
  let controller: RateController;
  let rateService: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateController],
      providers: [RateService],
    }).compile();

    controller = module.get<RateController>(RateController);
    rateService = module.get<RateService>(RateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
})
