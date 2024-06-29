// singleton(using constructor)
// Object.create

const facebookuser = new Object();  // this is also define as [ const facebookuser ={} ]
console.log(facebookuser); // output = {}

facebookuser.id = "user123"
facebookuser.name = "haris"
facebookuser.age = 27

console.log(facebookuser)
console.log(Object.values(facebookuser)); // shows the values of object in array format
console.log(Object.keys(facebookuser));   // shows the var names/keys of objects in array format
console.log(Object.entries(facebookuser)); // shows the values and keys array in an array format 
console.log(facebookuser.hasOwnProperty('age')); // shows boolean values tells we have the given keyvalue or not 

const userrr = {
    id: "bunny123",
    fullname: {             // nested objects
        username: {
        firstname: "bunny",
        lastname: "chaurasiya"
        }
    }
}
console.log(userrr.fullname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"e", 6:"f"};
// const obj3 = Object.assign({},obj1,obj2,obj4) // {} -->empty peranthesis is optional to add while we merging to objects 
//console.log(obj3);
const obj5= {...obj1, ...obj2, ...obj4}; // this is the method which is mostly used to merge more than one objects insted of using the first method or previous method
console.log(obj5);

// object literals
const mysymbol = Symbol("mai_symbol_hu");

const user = {
    name: "lokesh",
    age: 18,
    [mysymbol]: "mai-symbol-hu",
    location: "bulandshahr",
    email: "hhar3131@gmail.com",
    loggedIn: false
}
console.log(user); // --> print all the values which are defined in the object
console.log(user.name); // --> print the value of name variable which is defined in the user object
console.log(user["name"]);  // output = lokesh
console.log(user[mysymbol]); // output = mai-symbol-hu

user.name = "pavan"; // change the value of name variable to "pavan" .
console.log(user); 
user.age = 23; //  change the value of age variable to 23.
console.log(user);

const greetings = function(){
    console.log(`hello my langotia friend, ${user.name}`);
}
console.log(greetings()); // output = hello my langotia friend, pavan.

user.name = "prashant";
const greetings1 = function(){
    console.log(`hello my langotia friend, ${user.name}`);
}
console.log(greetings1());  // output = hello my langotia friend, prashant.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    name: "JavaScript ka Mela",
    price: "1299",
    instructor: "pta nhi"
}

console.log(course.name);
console.log(course.price);       // [Ist method to print the object values]
console.log(course.instructor);

const {name: n} = course
console.log(n);
const {price: p} = course     // [ destructuring of an object]
console.log(p);               // mostly used method to access an element of an object
const {instructor: i} = course 
console.log(i);     // "pta nhi"
