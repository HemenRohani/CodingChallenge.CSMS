import { ApiProperty } from "@nestjs/swagger";

export class BillComponent {
    @(ApiProperty({ description: 'rate of energy consumed', type: Number }))
    energy: number;

    @(ApiProperty({ description: 'rate of time duration', type: Number }))
    time: number;

    @(ApiProperty({ description: 'service fee', type: Number }))
    transaction: number;
}