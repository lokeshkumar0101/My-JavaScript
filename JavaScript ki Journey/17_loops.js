loops are also called as itterations...
for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i == 8){
        console.log("8 is my lucky number..");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`inner loop ${j}`);
  }
    
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {   
    console.log(i + "*" + j + "=" + i*j);
    }
    
}
let myArray = ["lokesh", "prashant", "pavan", "sanjeet", "anil", "shivam"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element); // --> print the array elements
}

console.log(myArray.length); // --> 6

for (let i = 0; i <= 15; i++) {
    if(i == 8){
        console.log("8 is the best number in this whole world.");
        break;
    }
    console.log(i);
    
}
for (let i = 0; i <= 15; i++) {
    if(i == 8){
        console.log("8 is the best number in this whole world.");
        continue;
    }
    console.log(i);
    
}
do while

let index = 0
do {
    console.log(index); 
    index = index + 1;
    
} while (index <= 10);


while

let i = 0
while (i <= 20) {
    console.log(`value of index is ${i}`);
    i = i + 2;    
}

let myarr = ["lokesh", "prashant", "pavan", "sanjeet"]
let i = 0
while (i < myarr.length) {
    console.log(myarr[i]);
    i = i + 1   
}


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

for of loop [ array specific loop ]
array = [1,2,3,4,5,6,7,8,9]
for (const num of array) {
    console.log(`array elements ${num}`);
}  // ---> print the array elements one by one

const greet = "hello world"
for (const gr of greet) {
    console.log(`each character: ${gr}`);
    
}


Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('CA', "Canada")


const neww = Num.map((num)=> num + 10)
console.log(neww);

// chaining in map 

const Array = [1,2,3,4,5,6,7,8,9]

const wahiArray = Array
                      .map((num)=> num * 10)
                      .map((num)=> num + 5)  const Num =  [1,2,3,4,5,6,7,8,9]
 // called chaining we can also use filter aND OTHER methods
                      console.log(wahiArray);  // --> 15,25,35,45,55,65,75,85,95


for (const [key, value] of map) {
    console.log(key, ":-", value);  // give output in array format
}

const myObject = {
   js: "javascript",
   cpp: "C++",
   py: "python"
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

let arr12 = ["js", "c", "python"]

for (const key in arr12) {
   console.log(arr12[key]);
}

for each loop

const coding = ["Python", "Java", "C", "Ruby", "Rust", "C++"]

coding.forEach( function (item) {
    console.log(item);   // print the elements of given array
})

coding.forEach( (item)=>{
    console.log(item);     // using arrow function
})

const programing = [
    {
        language: "javaScript",
        extension: ".js"
    },
    {
        language: "C",
        extension: ".c"
    },
    {
        language: "C++",
        extension: ".cpp"
    },
    {
        language: "python",
        extension: ".py"
    },
]

programing.forEach( (item)=>{
    console.log(item.language);
    console.log(item.extension);
})

const mynumbers = [1,2,3,4,5,6,7,8,9]
const newnum = mynumbers.filter( (num)=> num > 3)
console.log(newnum);   // without scope

// with scope

const newnum1 = mynumbers.filter( (item)=> {
    return item > 3 
} )
console.log(newnum1);   // --> [4,5,6,7,8,9]

const myar = [
    {title: "Time Mangement", genre: "self development", publish: 2003},
    {title: "Abracdabra", genre: "History", publish: 2000},
    {title: "Zombies", genre: "Fiction", publish: 2005},
    {title: "Greek Psyco", genre: "History", publish: 1995},
    {title: "The Death-Zone", genre: "History", publish: 2013},
    {title: "Peoples Of Peno", genre: "History", publish: 2000},
]
const fil = myar.filter((buk)=> buk.genre === "History")
console.log(fil);

const fil2 = myar.filter((buk)=> buk.publish >= 2000)
console.log(fil2);



// reduce method 

const mynums = [1,2,3,4,5]

const total = mynums.reduce( function(accumulator,currentVal){
    return accumulator + currentVal
},0)
console.log(total);  // [(0+1)+(1+2)+(3+4)+(6+4)+(10+5)]-->15

// using arrow function

const Total = mynums.reduce((acc,crr)=> acc+crr,0)
console.log(Total);  // [(0+1)+(1+2)+(3+4)+(6+4)+(10+5)]-->15

// We can use either arrow function or normal function.

const Course = [
    {
        Name: "DSA Course",
        price: 3999
    },
    {
        Name: "C++ Course",
        price: 6999
    },
    {
        Name: "Java Course",
        price: 2599
    },
    {
        Name: "C lan Course",
        price: 4999
    },
    {
        Name: "Data Sci Course",
        price: 5999
    },
]

const PricertoPay = Course.reduce((acc,item)=> acc + item.price,0)
console.log(PricertoPay);  // output --> 24599