// types to define a number in javascript

// 1. simple method
const balance = 4500;
console.log(balance);
console.log(typeof(balance)); //--> number

// 2. using new function

const bal = new Number (450000);
console.log(bal);
console.log(typeof(bal));   //--> object

const num = 456.56478

// methods/operations of numbers in javascript

console.log(num.toFixed(2));  // --> 456.56
console.log(num.toPrecision(4));  // --> 456.5
console.log(num.toString());      // number converts into a string


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                               // [maths in javascript]

console.log(Math); // math is a javascript library which is used to peforme various math operations
console.log(Math.abs(-4));   //absolute value --> 4 convert -ve to +ve
console.log(Math.round(4.7)); //  --> output = 5
console.log(Math.floor(4.7)); // --> output = 4
console.log(Math.ceil(4.7));    // --> output = 5         

console.log(Math.min(2,4,1,4,6,7,5,3)); // -->1
console.log(Math.max(2,4,1,4,6,7,5,3)); // -->7


console.log(Math.random());  //throw random values

max = 20;
min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // throw two digit values 
