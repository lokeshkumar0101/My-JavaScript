

// note => it is important to write the first letter capital to convert any variable type into another type
// for example 
// 

let a = 55555;    // a is a number

let str = String(a);  // now a is a string using conversion  // first letter of conversion var is Capital...
console.log(typeof str); // str => string
console.log(typeof a);   // a => number


let myname = "Lokesh Kumar"

console.log(Number(myname));  // NaN => not a number (we can't convert a string into a number) 

// check = true 
check = 0     // if check = 0 then false // if check = 1 then true
console.log(Boolean(check))