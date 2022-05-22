import { Test, TestingModule } from '@nestjs/testing';
import { RateService } from './rate.service';

describe('RateService', () => {
  let service: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateService],
    }).compile();

    service = module.get<RateService>(RateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return sample bill exactly.', () => {
    let dto = {
      "rate": { "energy": 0.3, "time": 2, "transaction": 1 },
      "cdr": {
        "meterStart": 1204307,
        "timestampStart": new Date("2021-04-05T10:04:00Z"),
        "meterStop": 1215230,
        "timestampStop": new Date("2021-04-05T11:27:00Z")
      }
    }
    var bill = {
      "overall": 7.04,
      "components": {
        "energy": 3.277, "time": 2.767, "transaction": 1
      }
    }
    expect(service.calculate(dto)).toMatchObject(bill);
  });
});
