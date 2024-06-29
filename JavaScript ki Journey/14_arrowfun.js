// this keyword --> it refers current context

const user = {
    name: "lokesh",
    age: 20,
    message: function() {
        console.log(`welcome to our website, ${this.name} `); // output = welcome to our website lokesh
    }
}
user.message()

// arrow function
//explicit return
const add = (num1,num2) => {
    return num1 + num2
}
console.log(add(2,4));   // output = 6

// implicit return method....

const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(7,4));   // output = 11


const user1 = {
    name: "sam",
    age: 45,
    message : ()=>{
        console.log(`welcome, ${this.name}!!!`); //output = welcome, undefined!!! 
    }
}
user1.message()


