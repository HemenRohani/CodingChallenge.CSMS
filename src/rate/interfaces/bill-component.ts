import { ApiProperty } from "@nestjs/swagger";

/**
 * rate of each component
 */
export class BillComponent {
    /**
     * rate of energy consumed
     */
    @(ApiProperty({ description: 'rate of energy consumed', type: Number }))
    energy: number;

    /**
     * rate of time duration
     */
    @(ApiProperty({ description: 'rate of time duration', type: Number }))
    time: number;

    /**
     * service fee
     */
    @(ApiProperty({ description: 'service fee', type: Number }))
    transaction: number;
}