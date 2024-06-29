                        
                        // lexical scoping

// function baharWala(){
//    let name = "mai nhi bataunga"
// }
// console.log(name);   // not accessable

// function outer(){
//     let name = "lokesh"
//     function inner(){
//         console.log("inner", name);    // it is accessable because it has lexical scoping
//     }
//     inner();
//     function innerTwo(){
//         console.log("InnerTwo", name);
//     }
//     innerTwo();
// }
// outer();


//+++++++++++++++++++++++++++++++++++++ ~ Clouser ~ ++++++++++++++++++++++++++++++++++++++

// function outer(){
//     let name = "prashant"
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }

// const myfun = outer()
// myfun();