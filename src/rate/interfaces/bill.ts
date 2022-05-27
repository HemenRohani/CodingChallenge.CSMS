import { ApiProperty } from "@nestjs/swagger";
import { BillComponent } from "./bill-component";

/**
 * Bill of charge process rating
 */
export class Bill {

    /**
     * Constructor of bill calss that prepare components
     */
    constructor() {
        this.components = new BillComponent();
    }
    /**
     * overall of rate
     */
    @(ApiProperty({ description: 'overall of rate', type: Number }))
    overall: number;

    /**
     * rate of each component
     */
    @ApiProperty({ description: 'rate of each component' })
    components: BillComponent;
}