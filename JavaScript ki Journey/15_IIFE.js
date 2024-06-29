// IIFE = Immediatly invoked function expression..

// function one() {
//     console.log("Function called!!!");
// }()           // error / wrong method

// using simple function
 (function one() {               // named IIFE
    console.log("Function called!!!");
})();    // right method to impliment IIFE 

 // using arrow fuction
(() => {
    console.log("Function 2  called!!!");
})(); // output = function 2 called!!!

((name) => {      // perameter passing in unnamed IIFE
    console.log(`mera naam ${name} hai`);
})("lokesh")  // output = mera naam lokesh hai


// note --> semicolan is must just after the program while writing more than one IIFE in one program