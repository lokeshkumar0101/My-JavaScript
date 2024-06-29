class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(this.username);
    }
 createId(){
        return `1234`
    }
}
const lokesh = new user("lokesh")
console.log(lokesh.createId())

class teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const hululu = new teacher("lokesh", "hhar3131@gmail.com")
hululu.logMe()