import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { ChargeDetailRecord } from "../interfaces/charge-detail-record";
import { Rate } from "../interfaces/rate";

export class RateDto {

    @ValidateNested()
    @Type(() => ChargeDetailRecord)
    @ApiProperty({ description: 'charge detail record' })
    cdr: ChargeDetailRecord;

    @ValidateNested()
    @Type(() => Rate)
    @ApiProperty({ description: 'unit rate of each component' })
    rate: Rate;
}
