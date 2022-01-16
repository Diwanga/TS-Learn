import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  
  list.render(doc, type.value, 'end');
});

// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
//let docTwo = addUID('shaun');

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1, 
  resourceName: 'person', 
  data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
  uid: 1, 
  resourceName: 'shoppingList', 
  data: ['bread', 'milk']
};

console.log(docThree, docFour);

// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource1<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne1: Resource1<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo1: Resource1<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne1); // HERE resource type is print in as number..   0
console.log(docTwo1);  //      4

// {uid: 1, resourceType: 0, data: {…}}
// data: {title: 'name of the wind'}
// resourceType: 0  ////////////////////////////////////#######
// uid: 1
// [[Prototype]]: Object
// app.js:72 
// {uid: 10, resourceType: 3, data: {…}}
// data: {title: 'name of the wind'}
// resourceType: 3   ////////////////////////////////???$$$$$$$$$$$$$$
// uid: 10
// [[Protot