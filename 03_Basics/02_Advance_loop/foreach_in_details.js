const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(function(values,index,arr){//here index and arr is optional.

    // console.log(`value is ${values} and index is ${index}`);

})

arr.forEach((values,index,arr)=>{//here index and arr is optional.//arrow function.

    // console.log(`value is ${values} and index is ${index}`);

})

function printValues(values,index,arr){
     console.log(`value is ${values} and index is ${index}`);
}

// arr.forEach(printValues);

const myNewArr = [
    {
        name:"krushna",
        age:23,
    }
    ,
    {
        name:"kumar",
        age:23,
    }
    ,
    {
        name:"sahu",
        age:23,
    }

];

myNewArr.forEach((value,index,myNewArr)=>{

    console.log(index,value.name,value.age);

})


