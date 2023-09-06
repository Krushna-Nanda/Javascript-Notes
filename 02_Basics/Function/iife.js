// const myFun = function chai() { // named iife
 
//     return {name: "Yash", age: 10}
// };

// console.log(myFun.name); // 10

const myFun = (function() {
    // return {name: "Yash", age: 10}
    return 10 ;
})(); 

console.log(myFun);//here also the semicolon is important ,  try it without giving it


//can we  write iife in arrow function ways ? 

(()=>{
    console.log("Hello, your db is connected");
})();


const myFun2 = (function(name) {
   console.log("Hello, your db is connected " + name);
})("krushna"); 