// class user{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     ChangeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "hhar3131@gmail.com", "jvdu123")

// console.log(chai.encryptPassword())
// console.log(chai.ChangeUserName());

class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}
class teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`new course is added by ${this.username}`);
    }
}
const chai = new teacher("lokesh", "hhar3131@gmail.com", "lokesh123")
chai.addCourse()