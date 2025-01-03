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

console.log(myNewArr[0].name);

myNewArr.forEach((value,index,myNewArr)=>{//it also handle the array of  objects.like above example.

//   console.log(index,value.name,value.age);
  console.log(index,value);

})


//for each loop is not return anything. it return undefined.

# ---------------------------------------------------------------------------------

    /*

Why forEach1 is suggested: Once you add forEach1 to Array.prototype, 
it becomes a method of all arrays, so the editor suggests it 
just like the built-in forEach method.

*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.forEach1 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]); // Pass current element, index, and array
    }
};

function printNumber(num) {
    console.log(num);
}

number.forEach1(printNumber); // Output: 1 2 3 4 5 6 7 8 9 10



/*

function hello (a){
    console.log(a);
}

hello("krushna","chandra " , 20 ); 


*/



