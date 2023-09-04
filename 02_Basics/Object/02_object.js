//const obj1 = new Object(); == const obj1 = {}; // both are same , bot crete an empty obj.

// in parenthesis you can add properties to the object:

/* example:
const obj1 = new Object({name: 'John', age: 30}); like this you can add properties to the object.

*/

// 2. Object.create() method

//if you pass null as a parameter, it will create an empty object.and it has no prototype.what is prototype? we will see later.you know what is prototype? it is like a parent object.from which you can inherit properties.

const obj2 = new Object(null); /* Yes, even when you create an object using new Object(null), 
it still inherits from the default Object.prototype. The null argument you pass to the 
Object constructor affects the initial value of the object but does not remove the prototype chain.*/

/*


it is an example of nested object:

obj2.name = 'John';
obj2.age = 30;
obj2.phoneNo = 1234567890;
obj2.id = 6987;


const obj3 =  {
email:"kc@hotmail.com",

 obj4: {

    name: "Kc",
    age: 30,
    phoneNo: 1234567890,
    
    obj5: {
        name: "nanda",
        age:165

}

}
}

console.log(obj3.obj4.obj5.name);// 

*/


const obj6 = {0: 'a', 1: 'b'};
const obj7 = {2: 'c', 3: 'd'};
/*

console.log(obj6[0]);

const obj8 = {obj6, obj7};//it cretes an object with two objects inside it.
console.log(obj8);// a
console.log(obj8.obj7);// a



*/

/*

const obj8 = Object.assign({},obj6, obj7);// it merges two objects into one object.
 console.log(obj8);// { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

 const obj9 = {...obj6, ...obj7};// it merges two objects into one object.
    console.log(obj9);// { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }


    */


const tinderUser = {
    name: "Kc",
    age: 30,
    location: "London",
    bio: "I am a software developer",
    likes: ["music", "movies", "sports"],

}

console.log(Object.keys(tinderUser));// [ 'name', 'age', 'location', 'bio', 'likes' ]
console.log(Object.values(tinderUser));// [ 'Kc', 30, 'London', 'I am a software developer', [ 'music', 'movies', 'sports' ] ]
console.log(Object.entries(tinderUser));// [ [ 'name', 'Kc' ],[ 'age', 30 ],[ 'location', 'London' ],[ 'bio', 'I am a software developer' ],[ 'likes', [ 'music', 'movies', 'sports' ] ] ]

console.log(tinderUser.hasOwnProperty('name'));// true



    /*

    // lets see how data comes from database:

    array of objects:

const obj10 = [

    {
        name: "Kc",
        age: 30,
    },
    {
        name: "nanda",
        age:165
    },

    {
        name: "krushna",
        age:168
    }

]

console.log(obj10[0].name);// Kc

  */