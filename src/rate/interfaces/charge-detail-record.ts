import { Type } from "class-transformer";
import { IsDate, IsDateString } from "class-validator";

export class ChargeDetailRecord {
    meterStart: number;

    meterStop: number;

    @Type(() => Date)
    @IsDate()
    timestampStart: Date;

    @Type(() => Date)
    @IsDate()
    timestampStop: Date;
}