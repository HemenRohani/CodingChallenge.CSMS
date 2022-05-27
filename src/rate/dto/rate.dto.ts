import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { ChargeDetailRecord } from "../interfaces/charge-detail-record";
import { Rate } from "../interfaces/rate";

/**
 * Rating Data Transfer Object 
 */
export class RateDto {

    /**
     * Charge Detail Record 
     */
    @ValidateNested()
    @Type(() => ChargeDetailRecord)
    @ApiProperty({ description: 'charge detail record' })
    cdr: ChargeDetailRecord;

    /**
     * unit rate of each component
     */
    @ValidateNested()
    @Type(() => Rate)
    @ApiProperty({ description: 'unit rate of each component' })
    rate: Rate;
}
