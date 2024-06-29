
name = "lokesh"
surname = "kumar"
age = 20

// method 1st

console.log(name + " " + surname + " age: " + age);

// method 2nd[modern way of string concatination]

 console.log(`my name is ${name} ${surname} and I am ${age}.`);  

// `` -->is most important

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// [String methods/ operations on strings]

const str = "thala-for-a-reason";

console.log(str.length);    // calculate the length of the string
console.log(str.charAt(4)); // shows the specific character of the string at given index value 
console.log(str.split("-")); // split the string on the basis of given char̥acter. 
console.log(str.lastIndexOf("a"));  // lastindexof character "a"-->14

str1 = "lokesh"
str2 = "kumar"

console.log(str1.concat(" ",str2));  // substract/concatinate two strings
console.log(str1.indexOf("e"));   //shows the index of given character of the string
console.log(str1.toUpperCase());  //convert string to upper case
console.log(str1.toLowerCase()); //convert string to lowercase
console.log(str1.slice(0,3));  //-->lok
console.log(str1.replace("lokesh","prashant")); //-->prashant

