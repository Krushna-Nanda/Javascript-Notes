//some good practices for string manipulation

/*
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2);
*/

//its not a good practice to use + operator for string manipulation because it is not efficient and it is not good for performance. why ? because when we use + operator for string manipulation then it will create new string in memory and it will take more time to execute. so we should use template literals for string manipulation. is string immutable in javascript ? yes string is immutable in javascript. we can not change string in javascript. we can only create new string in javascript. so we should use template literals for string manipulation. template literals are more efficient and more readable. we can use.

//modern way of string manipulation .

/*

let x = 10;
let y = 20;
console.log(`${str1} ${str2}`);
let templateLiteral = `hello world 1+23+24 is ${1+23+24}`;
console.log(templateLiteral);

console.log(`value of x is ${x} and value of y is ${y} and sum of x and y is ${x+y}`);

*/

// let name = "krushna chandra nanda";
// console.log(name);

// let myName = {
//     firstName:"krushna",
//     lastName:"chandra",
//     age:24
// }

// console.log(myName["firstName"]);
// console.log(myName[1]);


let myName = new String("krushna chandra nanda");
let myName1 = "    krush na      ";
let myName2 = "gopal-har*krushna";
// console.log(myName);

// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);
// console.log(myName.__proto__);
// console.log(myName.length);

/*

console.log(myName.toUpperCase());

let x = myName;
console.log(x);
x = x.toUpperCase();//it will create new string in memory. it will not change value of myName. because string is immutable in javascript.here a new string is created in memory and x is pointing to that new string. 
console.log(x);
console.log(myName);


*/


// console.log(myName.toLowerCase());
// console.log(myName.indexOf("chandra"));
// console.log(myName.lastIndexOf("chandra"));
// console.log(myName.charAt(2));
// console.log(myName.endsWith("chandra"));
// console.log(myName.length);
// console.log(myName.substring(0,5));//it will not include 7th index.7-1=6;
//console.log(myName.slice(-1,-5));// 1st index is gretor than 2nd index then it will return empty string.

//  console.log(myName1);
//  console.log(myName1.trim());

//console.log(myName.replace("krushna","harish"));//it will not change value of myName. it will create new string in memory and it will return new string.
//console.log(myName.includes("harish"));//it will return false because myName does not contain harish.

/*

//we can split the string based on some character.


 console.log(myName2.split("a"));//The split(" ") method is called on myName2. This method takes a delimiter as an argument and splits the string at each occurrence of the delimiter. In this case, the delimiter is a space " ". The result is an array of strings. The original string is not modified.
 console.log(myName2.split("-"));

*/

/*

let x = "krushna";
let y = "chandra";
let z = "nanda";
console.log(x.concat(y,z));

*/
