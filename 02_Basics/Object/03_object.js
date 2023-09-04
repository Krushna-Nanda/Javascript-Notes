// we discuss about json later.

const pesron = {
    firstName: 'krushna',
    lastName: 'nanda',
    age: 29,
    name_id:123,
    myFun:function greet() {
        console.log('Hi, I am ' + this.firstName);
    }
};

//Object destructuring


const {firstName:name,lastName:lname,age,name_id , myFun} = pesron;

// console.log(name,lastName,age,name_id);
// console.log(lname);

/*

little about json

{

    name: 'krushna',
    lastName: 'nanda',
    age: 29

}



*/