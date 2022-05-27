import { BadRequestException, Injectable } from '@nestjs/common';
import { RateDto } from './dto/rate.dto';
import { Bill } from './interfaces/bill';

/**
 * RateService is a service to calculate price of charging process.
 */
@Injectable()
export class RateService {

  /**
  * Calculate price of charging process by applying a rate to the CDR (charge detail record).
  * @param {RateDto} rateDto The DTO(Data Transfer Object) that has CDR(charge detail record) and rate info.
  * @returns The overall price for a charging process with rate of each component.
  */
  calculate(rateDto: RateDto) {

    let consumedEnergyinKwh = this.getConsumedEnergyInKwh(rateDto.cdr.meterStop, rateDto.cdr.meterStart);

    let timeDurationInMinutes = this.getTimeDurationInHour(rateDto.cdr.timestampStop, rateDto.cdr.timestampStart);

    let bill = new Bill();
    bill.components.energy = this.naiveRound(consumedEnergyinKwh * rateDto.rate.energy, 3);

    bill.components.time = this.naiveRound(timeDurationInMinutes * rateDto.rate.time, 3);

    bill.components.transaction = rateDto.rate.transaction;

    bill.overall = this.naiveRound(bill.components.energy + bill.components.time + bill.components.transaction, 2);

    return bill;

  }

  /**
  * Round number with specific count of decimal places.
  * @param {number} num  The number to be rounded.
  * @param {number} decimalPlaces  The count of decimal places.
  * @returns The rounded number with specific count of decimal places.
  */
  naiveRound(num: number, decimalPlaces: number = 0) {
    let p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
  }

  /**
  * Calulate the consumed energy.
  * @param {number} meterStop  The meter value(in Wh) of the electricity meter when the charging process was stoped.
  * @param {number} meterStart The meter value(in Wh) of the electricity meter when the charging process was started.
  * @returns The consumed energy(in KWh).
  */
  getConsumedEnergyInKwh(meterStop: number, meterStart: number) {
    let consumedEnergy = meterStop - meterStart;
    let consumedEnergyinKwh = consumedEnergy / 1000;

    if (consumedEnergyinKwh < 0)
      throw new BadRequestException();

    return consumedEnergyinKwh;
  }

  /**
  * Calculate how long charging process take.
  * @param {Date} timestampStop  The timestamp (according to ISO 8601) when the charging process was stoped.
  * @param {Date} timestampStart The timestamp (according to ISO 8601) when the charging process was started.
  * @returns Time duration(in Hour).
  */
  getTimeDurationInHour(timestampStop: Date, timestampStart: Date) {
    let diffInMilliseconds = timestampStop.getTime() - timestampStart.getTime();
    let getTimeDurationInHour = ((diffInMilliseconds / 1000) / 60) / 60;

    if (getTimeDurationInHour < 0)
      throw new BadRequestException();

    return getTimeDurationInHour;
  }
}
