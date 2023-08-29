// const num1 = 100;
// console.log(num1.toString()); // 100 //here autoboxing is done , temporary object is created and then toString() is called on it and then it is destroyed after the execution of the statement .


// const x = 10;
// console.log(x.toString().length); // 10

const num2 = 100.123456;
console.log(num2.toFixed(1)); // 100 it means it will print 1 digit after decimal point

/*

const num3 = 2344.923456;
console.log(num3.toPrecision(2)); // 23.1 // it means it will print 2 digit after decimal point

//difference between toFixed() and toPrecision() is that toFixed() will print the number after decimal point and toPrecision() will print the number before decimal point

 const num4 = 10000000000;
 console.log(num4.toLocaleString()); // 10,000,000,000 usa
 console.log(num4.toLocaleString('en-In')); //india 1,00,00,00,000

*/

/*

let x = Number.MAX_VALUE;
console.log(x); // 1.7976931348623157e+308
let y = Number.MIN_VALUE;
console.log(y); // 5e-324

let num  = 100000000000000000000000n;
console.log(num); // 1000000000000000000000000000000n

let z = Number.isSafeInteger(num);//it check wheather the number is safe or not
console.log(z); // true

*/

/*/

let num1 = Number.MAX_SAFE_INTEGER;
console.log(num1); // 9007199254740991

let num2 = Number.MIN_SAFE_INTEGER;
console.log(num2); // -9007199254740991

let num3 = Number.isSafeInteger(num1);
console.log(num3); // true

*/













