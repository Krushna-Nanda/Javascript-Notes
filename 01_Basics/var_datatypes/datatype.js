
//primtiive data types
let x = 10;
let name = "john";
let isLogedIn = true;
let score = null;
let y = undefined;
let bigNumber = 99999999999999n;

//non primitive data types

let myobj = {
    name: "john",
    age: 30,
};

let myarr = [1, 2, 3, 4, 5];

let myfunc = function () {
    console.log("hello");
}


console.log(typeof x);
console.log(typeof name);
console.log(typeof isLogedIn);
console.log(typeof score);
console.log(typeof y);
console.log(typeof bigNumber);
console.log(typeof myobj);
console.log(typeof myarr);
console.log(typeof myfunc);