let a = 180;
const b = 40;
// var c = 30;  // var has global scope so it is don't used by programers
if(true){
    let a = 10;
    const b = 20;
    console.log("inner A:", a); // a = 10
    console.log("inner B:", b); // b = 20
}
console.log("Outer A:",a);  // a = 180
console.log("Outer B:",b);  // b = 40

function outer(){
    const name = "lokesh";
    function inner(){
        const age = 20;
        console.log("Name:",name); // allowed   [output = lokesh]
    }
 //   console.log("Age:",age);  // not allowed
 console.log("Name:", name); //output = lokesh
    inner()
}
outer()

