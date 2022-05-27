import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RateService } from './rate.service';


describe('RateService calculate', () => {
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

  it('rate calculater should return sample bill.', () => {
    let dto = {
      "rate": { "energy": 0.3, "time": 2, "transaction": 1 },
      "cdr": {
        "meterStart": 1204307,
        "timestampStart": new Date("2021-04-05T10:04:00Z"),
        "meterStop": 1215230,
        "timestampStop": new Date("2021-04-05T11:27:00Z")
      }
    }
    let result = {
      "overall": 7.04,
      "components": {
        "energy": 3.277, "time": 2.767, "transaction": 1
      }
    }
    expect(service.calculate(dto)).toMatchObject(result);
  });

});

describe('RateService naiveRound', () => {
  let service: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateService],
    }).compile();

    service = module.get<RateService>(RateService);
  });


  it('it should return 3.277 for naiveRound(3.2769, 3)', () => {
    expect(service.naiveRound(3.2769, 3)).toBe(3.277);
  });

  it('it should return 2.767 for naiveRound(2.766666666666, 3)', () => {
    expect(service.naiveRound(2.766666666666, 3)).toBe(2.767);
  });

  it('it should return 0 for naiveRound(0, 2)', () => {
    expect(service.naiveRound(0, 2)).toBe(0);
  });

  it('it should return 2.12 for naiveRound(2.123, 2)', () => {
    expect(service.naiveRound(2.123, 2)).toBe(2.12);
  });

  it('it should return 2.13 for naiveRound(2.125, 2)', () => {
    expect(service.naiveRound(2.125, 2)).toBe(2.13);
  });

});

describe('RateService getConsumedEnergyInKwh', () => {
  let service: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateService],
    }).compile();

    service = module.get<RateService>(RateService);
  });

  it('it should return 1 for getConsumedEnergyInKwh(2000, 1000)', () => {
    expect(service.getConsumedEnergyInKwh(2000, 1000)).toBe(1);
  });

  it('it should return 10.923 for getConsumedEnergyInKwh(1215230, 1204307)', () => {
    expect(service.getConsumedEnergyInKwh(1215230, 1204307)).toBe(10.923);
  });

  it('it should return 0 for getConsumedEnergyInKwh(0, 0)', () => {
    expect(service.getConsumedEnergyInKwh(0, 0)).toBe(0);
  });

  it('it should throw BadRequestException for getConsumedEnergyInKwh(1, 2).', () => {
    expect(() => service.getConsumedEnergyInKwh(1, 2)).toThrow(BadRequestException);
  });
});

describe('RateService getTimeDurationInHour', () => {
  let service: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateService],
    }).compile();

    service = module.get<RateService>(RateService);
  });

  it('it should return 1 for getTimeDurationInHour("2021-04-05T11:27:00Z", "2021-04-05T10:04:00Z")', () => {
    expect(service.getTimeDurationInHour(new Date('2021-04-05T11:27:00Z'), new Date('2021-04-05T10:04:00Z'))).toBe(1.3833333333333333);
  });

  it('it should throw BadRequestException for getTimeDurationInHour("2021-04-05T10:00:00Z", "2021-04-05T10:04:00Z").', () => {
    expect(() => service.getTimeDurationInHour(new Date('2021-04-05T10:00:00Z'), new Date('2021-04-05T10:04:00Z'))).toThrow(BadRequestException);
  });
});
