const arrMarks = [10, 20, 30, 40, 50];
const arrnames = ["John", "Mary", "Jane", "Mark", "Peter"];
// arrMarks.push(arrnames);
// console.log(arrMarks[0]);
// console.log(arrMarks[4][3]);//return undefined
// console.log(arrMarks[5][3]);//return Mark


// console.log(arrMarks.concat(arrnames));

// const all =  arrMarks.concat(arrnames);
// console.log(all);

/*

const marvel_hero = ["iron","thor","hulk","spiderman","captain america"];
const dc_hero = ["flash","super man","batman"];

// const all_hero = [marvel_hero,dc_hero];
// console.log(all_hero[1][2]);//here is it a 2d array ? yes

const all_hero = [...marvel_hero,...dc_hero];
console.log(all_hero);

*/

/*

const arr = [10,20,[30,40],50,[60,70,80,[90,100]]];
console.log(arr.length);//40
console.log(arr[4][3][1]);//40

//complex right ? use flat method to make it simple , flat method is used to make a complex array to simple array , it will remove the nested array and make it simple array , it will not change the original array , it will return a new array.

const arr1 = arr.flat(Infinity);//Infinity is used to remove all the nested array , if we use 1 then it will remove only one nested array , if we use 2 then it will remove two nested array and so on.it return a new array.
console.log(arr1);


*/

/*

const new_arr = [10,20,30,40,50,60];
console.log(Array.isArray(new_arr));//true
const name = "krushna chandra nanda";
console.log(Array.from(name));//false

const arr = Array.from(name);
console.log("afer using from elemnts ");
console.log(arr);

*/


/*


//intresting case we look at it later , when we make project.

 const arr = [10,20,30,40,50,60];

const arr1 = Array.from({name:"krushna",age:23});
console.log(arr1); //return empty array , why ? because it is not an iterable object , it is an object , so it will return empty array. , but we its intresting case , we look at it later.


*/


//here we can make array from individual elements.

let x = 10;
let y = 20;
let z = 30;

const arr = Array.of(x,y,z);//it will return an array of x,y,z. what it does ? it will take all the elements and make an array of it.
console.log(arr);
