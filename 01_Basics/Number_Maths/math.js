// Description: Demonstration of Math object in JavaScript.

// console.log(Mat.abs(-100)); // 100

// console.log(Math.sqrt(100)); // 10

// console.log(Math.pow(2, 3)); // 8

// console.log(Math.min(10, 20, 30, 40, 50)); // 10

// console.log(Math.max(10, 20, 30, 40, 50)); // 50

// console.log(Math.ceil(10.1)); // 11

// console.log(Math.floor(10.9)); // 10

// console.log(Math.round(10.5)); // 11

// console.log(Math.round(10.4)); // 10

// console.log(Math.random());
// console.log((Math.random().toFixed(0) * 10 ) + 1); it only print 1 and 11 , think about it why 

//  console.log((Math.random().toFixed(1)*1000 ) + 1);

// console.log(Math.floor(Math.random()*1000) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//it will print random number between 10 and 20 including 10 and 20 , its a formula to print random number between two numbers including both the numbers.read it carefully and understand it .

