  // classes
  export class Invoice5 {
    // this all so can

    // readonly client: string;   // can read outsideclz. but cant change
    // private details: string;  // only can access inside class
    // public amount: number;    //default behaviour
  
    constructor(  // this is short cut. but 
      readonly client: string,  //must add access modifier in this way
      private details: string, 
      public amount: number,
    ){}
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }
  
  
  
