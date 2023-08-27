let score = 100;

// console.log(typeof score); //both are same thing , produced the same result , but the first one is more readable and the second one is   more understandable for the computer
// console.log(typeof (score));

// score = "100abc";

// console.log(typeof score);

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let isLogedIn = 1; //'0' , "empty string" it means false
let bolValue = Boolean(isLogedIn); //convert a number to boolean value , 0 is false , 1 is true , empty string is false , any string is true , null is false , undefined is false , NaN is false 
console.log(bolValue);

let number = String(score);//covert a number to string
console.log(typeof number); 


// *************** operations *************** 

// console.log(10 + 10); //addition
// console.log(10 - 10); //subtraction
// console.log(10 * 10); //multiplication
// console.log(10 / 10); //division
// console.log(10 % 3); //modulus , it returns remainder (1)
// console.log(10 ** 10); //exponentiation

//how to add two string together ? 

let str1 = "hello"
let str2 = "world"
console.log(str1+str2)

//how to add a number and a string together ?

let num1 = 10;
let num2 = "20";
console.log(num1+num2); //it will return 1020 , it will not add them , it will just put them together

//how to add a number and a string together and get the sum of them ?

let num3 = 10;
let num4 = "20";
console.log(num3+Number(num4)); //it will return 30 , it will add them together

//some tricky conversions 

console.log(10 + "10"); //it will return 1010 , it will not add them , it will just put them together ,because any string value with a number value will return a string value , so it will return 1010
console.log(10-"10");//why it returns 0 ? because it will convert the string to number and then it will  subtract them . 
//but why and how it convert the string to number ? because the minus operator is only for numbers , so it will convert the string to number and then it will subtract them .

// console.log(10-"10abc"); //it will return NaN , because it will convert the string to number and then it will  subtract them . why it returns NaN ? because the string is not a number , so it will return NaN

// console.log(10+20+"10"); what it returns ? it will return 3010 , because it will add 10 and 20 together and then it will put 10 after them , when 1st operand is a number and the 2nd operand is a string , it will convert the number to string and then it will put them together but when 1st and 2nd operands are numbers and third one is a string , it will add the first two numbers together and then it will put the third one after them , so thats why it returns 3010 .

console.log("10"+30+40);// what it returns ? it will return 103040 , because it will put 10 and 30 together and then it will put 40 after them , when 1st operand is a string and the 2nd operand is a number , it will convert the number to string and then it will put them together but when 1st and 2nd operands are strings and third one is a number , it will put the first two strings together and then it will put the third one after them , so thats why it returns 103040 .



//increment and decrement operators

let x = 10;
x++; //it will add 1 to x , so it will return 11
console.log(x);

let a = 10;
let b = a++; //it will add 1 to a , so it will return 11 , but it will return 10 for b , because it will return the value of a before adding 1 to it
console.log(b);
console.log(a);

