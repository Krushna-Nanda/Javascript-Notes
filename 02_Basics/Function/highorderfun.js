/* Higherorder function that takes a function and returns a function 
and callback function*/

function addNumber(a , b , callback){

    /*

    let result  = callback(a,b);

    return result;

    */

    return callback(a,b);

}

function add(x,y){
    return x+y;
}

// let Result = addNumber(10,20,add); //1st way
// console.log(Result);
// console.log(addNumber(10,20,add)); //2nd way

// console.log((addNumber(30,40,(x,y)=> x+y))); // 3rd way





// here in this case add is a callback function and addNumber is a higher order function


// bdw a funtion can also return a function

function addNumber(a , b){

    return function(a,b){
        return a+b;
    }

}

//   console.log(addNumber(10,20)());

//   console.log(addNumber(10,20)(10,200));
 

  //console.log((function (a, b){console.log("Hello"); return a + b;})(1000, 20)); // IIFE

  

function multiply(a,b){
    return () => a*b;
}

console.log(multiply(10,20));// it returns a anonymous function

console.log(multiply(10,20)());

