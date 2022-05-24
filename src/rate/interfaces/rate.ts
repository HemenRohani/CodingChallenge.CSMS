import { ApiProperty } from "@nestjs/swagger";

export class Rate {

    @ApiProperty({ description: 'unit rate of energy per kWh', type: Number })
    energy: number;

    @ApiProperty({ description: 'unit rate of time per hour', type: Number })
    time: number;

    @ApiProperty({ description: 'service fee', type: Number })
    transaction: number;
}