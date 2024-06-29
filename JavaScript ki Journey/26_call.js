function setUsername(username){
    this.username = username
}
function createUser(username, email, password){
    setUsername.call(this, username)

    
    this.email = email
    this.password = password 
}
const chai = new createUser("chai", "hhar3131@gmail.com", "1234")
console.log(chai);