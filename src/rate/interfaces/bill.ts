import { ApiProperty } from "@nestjs/swagger";
import { BillComponent } from "./bill-component";

export class Bill {
    @(ApiProperty({ description: 'overall of rate', type: Number }))
    overall: number;

    @ApiProperty({ description: 'rate of each component' })
    components: BillComponent;

    constructor() {
        this.components = new BillComponent();
    }
}