import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString } from "class-validator";

export class ChargeDetailRecord {

    @ApiProperty({ description: 'meter value of the electricity meter when the charging process was started', type: Number })
    meterStart: number;

    @ApiProperty({ description: 'meter value of the electricity meter when the charging process was stoped', type: Number })
    meterStop: number;

    @IsDate()
    @Type(() => Date)
    @ApiProperty({ description: 'timestamp (according to ISO 8601) when the charging process was started', type: Date })
    timestampStart: Date;

    @IsDate()
    @Type(() => Date)
    @ApiProperty({ description: 'timestamp (according to ISO 8601) when the charging process was stoped', type: Date })
    timestampStop: Date;
}