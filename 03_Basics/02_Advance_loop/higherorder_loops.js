// for off loop
//you canuse it on any iterable object like string, array, set, map, or any other iterable object .

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = "krushna kumar sahu";
const myObj = {
    name: "krushna",
    age: 23,
    city: "bbsr",
    state: "odisha",
    country: "india",
    pin: 751003,
 
}

// console.log(myObj);

for (const eachValue of arr) {

    // console.log(`value of arr is ${eachValue} `);
    
}

for (const eachValue of x) {
    
        // console.log(`value of x is ${eachValue} `);
        
    }

let myKeys = Object.keys(myObj);
for(let i = 0;i<myKeys.length;i++){
    const keyVal = myObj[myKeys[i]]; 
    // console.log(`key is ${myKeys[i]} and value is ${keyVal}`);
}

//for in loop

for (const key in myObj) {
    //  console.log(`key is ${key} and value is ${myObj[key]}`);
}

/*

its not a good practice to use for in loop on array because it will also iterate over the prototype properties of array.idk what it mean but it is not good practice.

for (const key in arr) {
     console.log(`key is ${key} and value is ${arr[key]}`);
}

*/

// Maps 

const myMap = new Map();//map is iterable object.
myMap.set("name","krushna");
myMap.set("age",23);
myMap.set(756030,"amarda road");
myMap.set("name","krushna");//it will not add duplicate value.
myMap.set("namee","krushna");

// console.log(myMap);

for (const key of myMap) {// it will like one iterable index , and that index will have two value one is key and another is value.like array.
    // console.log(key);
}

for (const [key , value] of myMap) {//destructuring the map.
    //  console.log(key,':-',value);
}
/*

for (const key of myObj){//it will not work on object.it gives you error.
    // console.log(key);//myObj is not iterable
}

*/

/*

for (const key in arr) {
   console.log(arr[key]);
}

*/

// console.log(typeof myMap.keys());
// console.log(typeof myMap.values());
// console.log(typeof myMap.entries());

// For Each Loop ? it is not actually a loop. it is a method. it is a higher order function.



