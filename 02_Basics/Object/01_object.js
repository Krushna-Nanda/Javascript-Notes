//its just a simple file , its not the final one , its just for understanding the basics of object , when we make project or move further we will use the object in a different way , or in advanced way , so this is just for understanding the basics of object

//object is a collection of key value pairs

//creating an object USING OBJECT LITERAL

//Object.create() method , we discuss it later.

//here i am skipping symbol , because its not used much , its used in advanced javascript , so we will discuss it later.

const myFisrtObject = {
    firstName: "Rahul",
    "middleName": "chandra",
    lastName: "Kumar",
    age: 21,
    hobbies: ["coding", "reading", "gaming"],
    email: "rahul@google.com",
    myFunction: function () {
        console.log("Hello World");
        }


};
  
//how to access the value of an object , we can access the value of an object using dot notation or bracket notation , but dot notation is more used than bracket notation , but we can use both of them.

// console.log(myFisrtObject.firstName);
// console.log(myFisrtObject.hobbies);
// const myHobbies = myFisrtObject.hobbies;
// console.log(myHobbies);
// const myAge = myFisrtObject["age"];
// console.log(myAge);
// const name = myFisrtObject["firstName"];
// console.log(name);
// console.log(typeof myFisrtObject.age);
// console.log(typeof myFisrtObject.lastName);
// console.log(myFisrtObject["middleName"]);//it is only accesible with bracket notation , we cant access it with dot notation .

// console.log(myFisrtObject.myFunction());//it returns undefined because we are not returning anything from the function , we are just printing something on the console , so it returns undefined , if we return something from the function then it will return that value , but here we are not returning anything , we are just printing something on the console , so it returns undefined.

 console.log(myFisrtObject.myFunction);//it returns the function definition , it does not call the function , it just returns the function definition.

// Object.freeze(myFisrtObject);// here we are freezing the object , so we cant add any new property or delete any property and cant change any any value

// myFisrtObject.email = "hello@gmail.com";
// console.log(myFisrtObject.email);

myFisrtObject.random = function () {

    console.log("Hello World");

};

 console.log(myFisrtObject.random);

/*

const mySecondObject = {

    0: "Rahul",
    1: "Kumar",
    2: 21,
    3: ["coding", "reading", "gaming"],
    4: "rahul@hotmail.com"

};

console.log(mySecondObject["0"]);//we cant access access when key is a number , we can access it using bracket notation
console.log(mySecondObject[1]);//there  is no need to use quotes in bracket notation , but we can use it .


*/