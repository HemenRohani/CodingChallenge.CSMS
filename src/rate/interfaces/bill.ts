import { BillComponent } from "./bill-component";

export class Bill {
    overall: number;
    components: BillComponent;

    constructor() {
        this.components = new BillComponent();
    }
}