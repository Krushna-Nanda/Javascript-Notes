
// function addone(num){ //hoisting included 
//     return num + 1
// }


// const fun1 = function  (num){
//     return num + 2
// }

// const fun2 = function kcn (num){ // here hoisting is not included
//     return num + 2
// }

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}