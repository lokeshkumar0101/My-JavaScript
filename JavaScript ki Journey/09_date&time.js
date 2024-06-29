

const mydate = new Date()

// console.log(mydate);  // shows the time 
// console.log(mydate.toString());   // converts actual time to a string
// console.log(mydate.toLocaleString());  // shows date and time in dd/mm/yy format and tome in 12hour 
// console.log(mydate.toTimeString());   // shows time
// console.log(mydate.toDateString());  // --> Mon Mar 04 2024
// console.log(typeof mydate);  // typeof date is an object

const createddate = new Date(2004, 7, 8)  // create your own variable to define custom date
const second = new Date("08-08-2004")  // user defined date in dd/mm/yy format
console.log(second.toLocaleString());  // it converts the string to a local string 

console.log(createddate.toLocaleString());