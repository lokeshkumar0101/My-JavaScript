
// // ARRAY in JavaScript

const arr = ["lokesh","prashant","pavan","sanjeet","anil","shivam"]; // an array of strings
console.log(arr);  // print the arr
const arr2 = [1,2,3,4,5,6,7,8];   // array elements of homogenous elements.
console.log(arr2);   // print the arr2
console.log(arr2.indexOf(4));  // -->
const arr3 = ["lokesh",2,4,7,4.5,9.56,"g",true,];  
console.log(arr3); // print the array of elements
console.log(typeof arr3); // -->object
console.log(arr3[5]);  // shows the fifth element of the array --> 9.56

    // methods of an ARRAY

    const arr5 = [1,2,3,4,5];
    arr5.push(67); // insert 67 at the end of the array
    console.log(arr5); // output = [1,23,4,5,67]
    arr5.pop()  // delete the last element of the array
    console.log(arr5);  // output = [1,2,3,4,5tt]
    console.log(arr5.shift()); //delete the first element of the array
    console.log(arr5);  // after deletion of first element output = [2,3,4,5]
    console.log(arr5.unshift(7)); // insert element 7 at beginning of the array
    console.log(arr5); // output = [7,2,3,4,5]
    console.log(arr5.includes(7)); //--> false because 7 doesn't exist in given array elements
    console.log(arr5.slice(1,4)); // output = [2,3,4] [ also supports negative values ]#it creates a shallow copy of a portion of an array into a new array object.
    console.log(arr5.splice(2,0,"g")); // [ used to add or replace elm.] add "g" in array at index of 2.
    console.log(arr5); // output = [1,2,'g',3,4,5]
    console.log(arr5.concat([5,4,6,7,8,9]));  // insert the given array elements at end in exesting array

