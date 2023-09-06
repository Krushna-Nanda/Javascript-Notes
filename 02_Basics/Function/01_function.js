function myFyn(){
    console.log('Hello World');
}
myFyn;//this is a reference to the function
// myFyn();//this is a call to the function

function userName(name = 'John Doe'){//we can add default values to the parameters
    console.log('Hello ' + name);
}

// userName();

// variable arguments

function totalCartPrice(...prices){//is it act like array ? yes it is array like object 
let total = 0;
    for (let i = 0; i < prices.length; i++) {
        if(typeof prices[i] !== 'number'  ){
            continue;
         }

    total += prices[i];
   
}
return total;
}

// console.log(totalCartPrice(10,20,30,"40",50));

const obj = {
    name: 'krushna',
    age : 25
}

function user(anyObject){
    if(typeof anyObject !== 'object'){
        console.log('please pass object');
        return;
    }
    console.log(anyObject.name);
    console.log(anyObject.age);
}
user(1);
user(user);//passing object as a parameter
user({name:'krishna',age:25});//passing object as a parameter

    
function handlingArray(array){

    return array[3];
}

console.log(handlingArray([1,2,3,4,5,6,7,8,9,10]));