let var1 = 10;
let var2 = var1;
var2 = 20;
console.log(var1, var2); // 10 20

let obj1 = { 
    
    value: 10 ,
    name:"krushna kumar singh"
};

let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);//ans is 20 because obj2 is reference of obj1 so if we change value of obj2 then it will also change value of obj1 because both are same object in memory.