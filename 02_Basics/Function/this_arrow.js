const username = "chandra shekhar";//this is the reson why we use this keyword.to avoid the confusion between the global variable and the local variable.

const user = {
    username: "krushna",
    price: 999,

    welcomeMessage: function() {
        console.log(this.username);
        // console.log(this);
    }

}
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()
// console.log(this);//it print {}.because this is a global object.





function chai() {
    const username = "chandra shekhar";
    console.log(this);
    console.log(this.username);
}
//chai();//it print global object.



// const myFunc = () => {
//     const username = "chandra shekhar";
//     console.log(this);
//     console.log(this.username);
// }

// myFunc();


// const addTwo = (num1 , num2) => {

//     return num1 + num2;
// }

// console.log(addTwo(2,3))

//implict return

// const addTwo = (num1, num2) => num1 + num2;//you can wrap it in the parenthesis.its helpful when you are returning the object.why ? if you use curly braces then you have to use the return keyword.but if you wantto retuen object you have to use curly braces.so you need parenthesis.

// console.log(addTwo(2, 3))

// const addTwo = num1 => num1 + 2;
// console.log(addTwo(2))

const returnAOjb = (num1 , num2 ) => ({ username: "chandra shekhar" });//if you want to return the object then you have to use the parenthesis.if you dont use the parenthesis then it will give you the undefined.

console.log(returnAOjb(2,3))

