import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} is owes £${this.amount} for ${this.details}`
    }
}
