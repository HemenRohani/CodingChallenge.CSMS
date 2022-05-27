import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

/**
 * unit rate of each component
 */
export class Rate {
    /**
     * unit rate of energy per kWh
     */
    @IsNumber()
    @IsPositive()
    @ApiProperty({ description: 'unit rate of energy per kWh', type: Number })
    energy: number;

    /**
     * unit rate of time per hour
     */
    @IsNumber()
    @IsPositive()
    @ApiProperty({ description: 'unit rate of time per hour', type: Number })
    time: number;

    /**
     * charge process service fee
     */
    @IsNumber()
    @IsPositive()
    @ApiProperty({ description: 'charge process service fee', type: Number })
    transaction: number;
}