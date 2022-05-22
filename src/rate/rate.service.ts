import { Injectable } from '@nestjs/common';
import { domainToASCII } from 'url';
import { RateDto } from './dto/rate.dto';
import { Bill } from './interfaces/bill';
import { BillComponent } from './interfaces/bill-component';

@Injectable()
export class RateService {
  calculate(rateDto: RateDto) {

    let bill = new Bill();

    let consumedEnergyinKwh = this.getConsumedEnergyInKwh(rateDto.cdr.meterStop, rateDto.cdr.meterStart);

    let timeDurationInMinutes = this.getTimeDurationInMinutes(rateDto.cdr.timestampStop, rateDto.cdr.timestampStart);

    bill.components.energy = this.naiveRound(consumedEnergyinKwh * rateDto.rate.energy, 3);

    bill.components.time = this.naiveRound(timeDurationInMinutes * rateDto.rate.time, 3);

    bill.components.transaction = rateDto.rate.transaction;

    bill.overall = this.naiveRound(bill.components.energy + bill.components.time + bill.components.transaction, 2);

    return bill;

  }

  naiveRound(num: number, decimalPlaces: number = 0) {
    let p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
  }

  getConsumedEnergyInKwh(meterStop: number, meterStart: number) {
    let consumedEnergy = meterStop - meterStart;
    return consumedEnergy / 1000;
  }

  getTimeDurationInMinutes(timestampStop: Date, timestampStart: Date) {
    let diffInMilliseconds = timestampStop.getTime() - timestampStart.getTime();
    let diffInMinutes = ((diffInMilliseconds / 1000) / 60) / 60;
    return diffInMinutes;
  }
}
