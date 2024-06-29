// if
//if(condition){
//Expression;
//}

// <,>,=,==,!=,===(also check type of assigned vale);

// const loggedIn = true;
// if(loggedIn == true){
//     console.log("User is logged In..");
// }

// const temp = 76
// if( temp < 50){
//     console.log("temprature is less than 50 deg");
// }
// else{
//     console.log("greater than 50 deg");
// }

// const userloggedIn = true
// const debitCard = true
// const loggedInFromGoogle = true
// const loggedInFromEmail = false

// if (userloggedIn && debitCard){            // && (and operator) to check multiple statements at the same time
//     console.log("allow to shop from the website");
// }

// if(loggedInFromEmail || loggedInFromGoogle){     // || --> or operator
//     console.log("allow to shop...");
// }

                            //  [ switch case]

// falsy values = false, 0, -0, BigInt, NaN, "", null, undefined
// truthy values = "0", "false", " ",[empty array],{empty object}, function(){}

// important
// false == 0 --> true
// false == "" -->true
// 0 == ""  -->true

// syntax
const month = 3
switch (month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        console.log("none");
        break;
}

const emptyobject = {}
if(Object.keys(emptyobject).length === 0){
    console.log("object is empty");
}

const emptyarray = []
if(emptyarray.length === 0){
    console.log('array is empty');
}

// nullish coalescing operator (??): ull undefined

let val1 = 3 ?? 5
console.log(val1)  //--> 3

let val2 = null ?? 34;
console.log(val2);  //--> 34

let val3 = undefined ?? 34
console.log(val3);  // --> 34

let val4 = null ?? 45 ?? 56
console.log(val4);  // --> 45

// terniary operator
// condition ? true : false

const price = 100
price < 50 ? console.log("less than 50") : console.log("greater than 50");
