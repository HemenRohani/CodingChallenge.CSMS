import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { ChargeDetailRecord } from "../interfaces/charge-detail-record";
import { Rate } from "../interfaces/rate";

export class RateDto {
    @Type(() => ChargeDetailRecord)
    @ValidateNested()
    cdr: ChargeDetailRecord;

    @Type(() => Rate)
    @ValidateNested()
    rate: Rate;
}
