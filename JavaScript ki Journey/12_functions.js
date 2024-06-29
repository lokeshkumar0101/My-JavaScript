// function mynme(){
//     console.log("L"); //L
//     console.log("O");  //O
//     console.log("K");  //K
//     console.log("E");  //E
//     console.log("S");  //S
//     console.log("H");  //H
// }
// mynme() // print the characters one by one

// function addition(num1, num2){
//     console.log(num1 + num2);
// }
// addition(2,4)  // output = 6

function addition(num1, num2){
    let sum = num1 + num2;
    return sum;
}
const sum = addition(8,5)
console.log("result:",sum); // output [result:13]

function message(name){
return `${name} just messaged you...`
}
console.log(message("hitesh"));  // output = lokesh kumar just messaged you...
// console.log(message()); // output = undefined

function calculate(...num){    //[... --> rest operator]
    return num
}
console.log(200,300,350,700,400);

// object handling

const user = {
    name: "permish",
    username: "permish_01",
    age: 23
}

function handleobj(anyobject){
    console.log(`Name is ${anyobject.name} and username is ${anyobject.username}, age is ${anyobject.age}  `);
}
handleobj(user)

// array handling

const myarray = [100,200,300,400,500]
function returnvalue(getarray){
    return getarray[2]
}
console.log(returnvalue(myarray));