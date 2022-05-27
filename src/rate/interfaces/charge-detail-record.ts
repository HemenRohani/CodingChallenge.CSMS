import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsInt, IsPositive } from "class-validator";

/**
 * charge detail record
 */
export class ChargeDetailRecord {

    /**
     * meter value of the electricity meter when the charging process was started
     */
    @IsInt()
    @IsPositive()
    @ApiProperty({ description: 'meter value of the electricity meter when the charging process was started', type: Number })
    meterStart: number;

    /**
     * meter value of the electricity meter when the charging process was stoped
     */
    @IsInt()
    @IsPositive()
    @ApiProperty({ description: 'meter value of the electricity meter when the charging process was stoped', type: Number })
    meterStop: number;

    /**
     * timestamp (according to ISO 8601) when the charging process was started
     */
    @IsDate()
    @Type(() => Date)
    @ApiProperty({ description: 'timestamp (according to ISO 8601) when the charging process was started', type: Date })
    timestampStart: Date;

    /**
     * timestamp (according to ISO 8601) when the charging process was stoped
     */
    @IsDate()
    @Type(() => Date)
    @ApiProperty({ description: 'timestamp (according to ISO 8601) when the charging process was stoped', type: Date })
    timestampStop: Date;
}