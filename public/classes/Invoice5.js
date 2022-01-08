// classes
export class Invoice5 {
    // this all so can
    // readonly client: string;   // can read outsideclz. but cant change
    // private details: string;  // only can access inside class
    // public amount: number;    //default behaviour
    constructor(// this is short cut. but 
    client, //must add access modifier in this way
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
