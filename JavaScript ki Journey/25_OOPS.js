// javascript & classes....

// object:-> it is a collection of properties & methods.
// ex:-> toLowerCase, toUpperCase, etc.

// object literal

// const user = {
//     username: "lokesh.0808",
//     loginCount: 20,
//     loggedIn: true,
//     getUserDetails: function(){
//         console.log("got user data from database.");
//     }
// }
// console.log(`Your username for our site is ${user.username}.`);


// constructor function
// it gives new instance every time

function user(username, loginCount, loggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.loggedIn = loggedIn

    return this
}
const userOne = new user("lokesh", 34, true)
const userTwo = new user("prashant", 4, false)
console.log(userOne);
console.log(userTwo);  

// new :-> firstly it creates a new instance every time.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                 //   [prtotype]

function multi(num){
    return num*5
}
multi.power = 9

console.log(multi.power);
console.log(multi(9))
console.log(multi.prototype);

function createuser(username, score) {
    this.username = username
    this.score = score
}
createuser.prototype.increment = function () {
    this.score++
}
createuser.prototype.print = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createuser("chai", 25)
const tea = createuser("tea",300)

chai.print()



