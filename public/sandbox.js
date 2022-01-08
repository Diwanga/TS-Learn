import { Invoice5 } from "./classes/Invoice5.js";
console.log("Diwanga Amasith");
const character1 = "msrio";
var input = document.querySelectorAll("input");
console.log(input);
//=================================================
// const circle = (diameter) =>{ //arameter 'diameter' implicitly has an 'any' type.
// return diameter * Math.PI;
// }
// console.log(circle("fefefef")); // NAN
//............................
const circlenew = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circlenew("34")); // Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circlenew(34)); // 34 * PI
//...........VVVVVVVVV
// IN  GEERATED JS THER IS NO  change. the type is checked in compile time. 
//NOT IN RUNTIME
// var circlenew = function (diameter) {
//     return diameter * Math.PI;
// };
// console.log(circle(34)); // NAN
/*TypeScript only performs static type checking at compile time!
The generated JavaScript,*/
//which is what actually runs when you run your code, 
//does not know anything about the types
//.......... 
let a = 4;
// a = "feffe";  this cant. type script  is get a as number
a = 7; //worked
//.................................................................
// ==========ARRAY===========  array type
let names = ["lungi", "diwanga", "diwangi"]; // string array
let num = [2, 3, 4, 5, 6];
// number array
let mixed = ["diwanga", 2, true, 3, 'Diwangi']; // mixed array
names.push("pawani"); // OKAY
//  names.push(34);//  NOT OKAY // as TS get names as string array
mixed.push(false); // we can add any type of mentioned only. number , string, boolenas only 
console.log(mixed); //(6) [diwanga', 2, true, 3, 'Diwangi', false ]
// names = "dwdwd";  // cant. name is array typed
//.................................................................
// ===OBJECTS===  // obj type
let objbaba = {
    name: "paw",
    age: 25,
    isPretty: true
};
objbaba.age = 26;
// objbaba.age = "diwanga" // can't TS get objbab.age as number
// objbaba.school = "scg" // can't. can't add new filds. have to be initial structure
objbaba = {
    name: "pawdiw",
    age: 26,
    isPretty: true
    // height : 5   // can't as not in initial stucture
}; // oK  as initial structure
//.................................................................
//expilicit types 
//not to give free to tS to detect type
let character;
let age;
let isLoggedIn;
// age = "fdf"; // can't as boolean
//arraye
// let  abc: string[];// ERROR.. have to initialized
// abc.push("dwanga");// this will showUncaught TypeError: Cannot read properties of undefined (reading 'push'
let abcW = []; // ERROR.. sandbox.js:64 
abcW.push("dwanga"); // ok
// union types   // mixed types array
let mixedN = [];
mixedN.push("sdsdf");
mixedN.push(34);
// mixedN.push(true);// no boolens in frist
let uid;
uid = 34;
uid = "DFasdf";
//objects
let ninjaOne;
ninjaOne = []; //array is kind of object
ninjaOne = {
    name: "dwanga"
};
ninjaOne = {
    age: 34
}; // now can re assign
// for more explicit
let ninjaTwo;
// ninjaTwo = {
// age = 22    // cant . now ninja two hase explicit structure
// }
//.................................................................
// Any TYPES    THIS LIKE JS
let width = 45;
width = 34;
width = "dfgdf";
width = true;
console.log(width); // ==> true
width = { name: "diwanga" }; // OK 
// * rare case for using it
let mixednew = [];
mixednew.push(23);
mixednew.push('df');
mixednew.push(true);
let ninjnew;
ninjnew = {
    name: "fsgdfg",
    age: 22
    // ggg: "dfs" // cant
};
//.................................................................
//function type
let greet = (greeting) => {
    console.log(greeting);
};
let meet; // Capital F
meet = () => {
};
const add = (a, b) => {
    console.log(a + b);
};
add(3, 4);
const add2 = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(3, 4);
// add(3,4,"DIWANGA"); //more parameters
add2(13, 4, "DIWANGA"); //OK   // when c not supply it become undefine
// we can givedefault value
const add3 = (a, b, c = "diwanga") => {
    console.log(a + b);
    console.log(c);
};
//add3(3);  we need parameters for not giving defalt values
//voidd type is retunred
add3(2, 3);
//5
//Diwanga
// return type
const minus = (a, b) => {
    return a - b;
};
let ans = minus(3, 4);
// ans = "f"; can't as Ts know ans is number
// we can expliixtyly show th retun type by this is good for larg func
const minus2 = (a, b) => {
    return a - b;
};
const greet2 = (id, obj) => {
    console.log("gtrr");
};
greet2(3, { name: "dd", uid: 23 });
//function signatures
let logdetails; //function signatures
logdetails = (logzero) => {
    ;
};
//DOM manipulation
const anchor = document.querySelector("a");
console.log(anchor); //error   // anchor possible be null
if (anchor) { // SOLUTION
    console.log(anchor); //error 
}
// TS solution
const anchorN = document.querySelector("a"); // ! this says thin is return SOme. I know. 
console.log(anchorN);
// ?? ###
// Anither amaazing thing  
// anchor object knows it is anchor EventTarget. we can catch anchor?.*ancher attribut*
const form = document.querySelector('.new-item-form');
// now form does not know it is form. so we cant form.****  catch
//  WE  CAN USE TYPE CASTING FOR THIS
const formKnown = document.querySelector('.new-item-form');
console.log(formKnown.children);
//DOM
const anchor3 = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor3.href);
//const form = document.querySelector('form')!;
const form2 = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//CLASSES
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });
console.log(invoices);
//ACCESS MODIFIERS
// classes
class Invoice2 {
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
const invOne2 = new Invoice('mario', 'work on the mario website', 250);
const invTwo2 = new Invoice('luigi', 'work on the luigi website', 300);
let invoices2 = [];
invoices.push(invOne2);
invoices.push(invTwo2);
invoices2.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
//........................................................................
//Modules   different files for different task.  
// we cacn use Es6 js module system. We can use TS here also. 
//import Export
//+==============
// MODULE ACESS÷÷
const invOne5 = new Invoice5('mario', 'work on the mario website', 250);
const invTwo5 = new Invoice5('luigi', 'work on the luigi website', 300);
let invoices5 = [];
invoices5.push(invOne5);
invoices5.push(invTwo5);
invoices5.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
