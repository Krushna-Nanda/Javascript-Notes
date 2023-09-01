//remeber that its not the final file of array , that conatins all the methods of array, all implementation of , here 1st i learn the basics of array , then i will learn on the go , when i need to use any method of array , i will learn that method and implement it here , so that i can learn it in a better way , and i can also use it in future for reference.

// Array is a data structure used to store multiple values in a single variable.
// Array is a reference type data type.

const newArray = new Array(5).fill(123); // Creates an array with a specified length filled with a value.

/*
const newArray2 = [1, 2, 3, 4, 6]; // Creates an array with a specified values.
const newArray3 = newArray2;
newArray3[0] = 100;
console.log(newArray3);//here it proof that array is a reference type data type , because when we change the value of newArray3 , it also change the value of newArray2 , because both are pointing to the same memory location.
*/

/*

const newArray4 = [1, 2, 3, 4, 6];
newArray4.fill(100, 0, 3); // fill(value, start, end) method is used to fill the array with a value from a start index to an end index.
newArray4.push(200); // push(value) method is used to add a value at the end of the array.
newArray4.pop(); // pop() method is used to remove a value from the end of the array.
console.log(newArray4.length);
newArray4.unshift(300); // unshift(value) method is used to add a value at the beginning of the array.
console.log(newArray4.length);
newArray4.shift(); // shift() method is used to remove a value from the beginning of the array.
console.log(newArray4.length);

console.log(newArray4);

*/


//here we are going to discuss about slice and splice method of array.

/*

slice(start, end-1) method is used to copy a part of an array from a start index to an end index.

const newArray5 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(newArray5);
const newArray6 = newArray5.slice(0, 3); // slice(start, end) method is used to copy a part of an array from a start index to an end index.
console.log(newArray6);//here it will print the value from index 0 to index 2 , because end index is not included.so the result will be [1,2,3]
console.log(newArray5);//here it will print the original array , because slice method does not change the original array.

//one thing to remember that slice method does not change the original array , but splice method change the original array.after slicing or spliceing the array refence will be changed , but the original array will not be changed.

*/

/*

splice(start, end-1) method is used to remove a part of an array from a start index to an end index.end-1 index will be removed.

const newArray7 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log("before splicing " + newArray7);
const newArray8 = newArray7.splice(0, 3); // splice(start, end) method is used to remove a part of an array from a start index to an end index.end-1 index will be removed.
console.log("after splicing " + newArray7);
console.log(newArray8);//it will print the removed part of the array.


*/

//here we are going to discuss about indexOf and lastIndexOf method of array , like more methods of array , we will discuss it on the go.

const newArray9 = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// console.log("indexOf and lastIndexOf method of array" + newArray9.indexOf(6));//it will print the index of the value 6 , if the value is not present in the array , it will print -1.

// console.log(newArray9.includes(6));//it will print true , because 6 is present in the array.

const newArray10 = [1, 2, 3, 4, 6, 7, 8, 9, 10, 6];

const newArray11 = newArray10.join(" , ");//it will join all the elements of the array with a space between them.here what happens is , it will convert the array into a string , and then it will join all the elements of the array with a space between them.what ever we pass in the join method , it will join all the elements of the array with that value.for example if we pass a comma in the join method , it will join all the elements of the array with a comma between them.
console.log(newArray11);
console.log(typeof newArray11);
