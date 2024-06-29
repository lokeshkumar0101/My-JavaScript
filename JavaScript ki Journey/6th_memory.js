//# memory types in javascript

// Stack [primitive data types] = stack gives you the actual value of the variable
// Heap  [non primitive data types] = heap gives you the reference of the variable

let myobj = {
    user: "lokesh",
    id: 1234,
    salary: 345673.67,
    upiId:"lokesh@goole.com",
};

userTwo = myobj; 
myobj.id = 564;

console.log(userTwo); //id = 564

// console.log(myobj.user);
// console.log(myobj.id);
// console.log(myobj.salary);
// console.log(myobj.upiId);

let myname = "lokesh";  
let name2 = myname;   // name2 --> Lokesh
name2 = "prashant";   // name2 --> prashant

console.log(myname); //lokesh
console.log(name2);  //prashant

