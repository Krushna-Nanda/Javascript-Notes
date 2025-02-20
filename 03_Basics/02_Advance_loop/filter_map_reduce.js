/*

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // forreach

  // books.forEach((element) => console.log(element.title +"," + element . genre));

  //map

  // let newarr = books.map(funky)

  // function funky(currentvalue){
  //   if(currentvalue.genre === "Fiction"){
  //     return currentvalue;
  //   }
  //   else{
  //     return "not match";
  //   }
   
  // }

  // console.log(newarr);
  

 // filter

 let newarr = books.filter((books) => books.genre === "Non-Fiction")
 console.log(newarr);
 

*/



/*


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter function is return the array of filtered values.

const myFilterArr = arr.filter((number) => {
    if (number % 2 === 0) {
        return true;//if u pass number value then also it ok , but `true` is more readable.
    }
})

// console.log(myFilterArr);


//if youwantto do the same in for each loop
const Arr2 = [];

arr.forEach((number) => {
    if (number % 2 === 0) {
        Arr2.push(number);
    }
})

// console.log(Arr2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((boook)=>{

    if(boook.genre === 'Science'){
        return true;
    }

  })

    // console.log(userBooks);

  const userBooks2 = books.filter((boook)=>(boook.publish > 2000))//if you want to return only one value then you can use this syntax.parenthesis is optionalfor book.publish > 2000.it is used for more readability.

//   console.log(userBooks2);

  const userBooks3  = books.filter((book)=>(book.publish>1995 && book.genre === 'History'))

  console.log(userBooks3);


  */


/*


//=======================================+++++++++++++++===============================
//from here we are going to discuss about Map function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const myMapArr = arr.map((num)=>{
  // console.log(num);
   return num*2; 
})

//  console.log(myMapArr);


//function chaining using map and filter

const mixMapFilter = arr.map((num)=> num*10).map((num)=> num+5).filter(function(num){return num>50})

// console.log(mixMapFilter);
console.log(mixMapFilter);


*/


//Reduce function 

const initialvalue = 0;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//shoretr version {const myReduceArr = arr.reduce((accumulator , currentvalue)=>  accumulator + currentvalue,initialvalue)}
const myReduceArr = arr.reduce((accumulator, currentvalue) => {

    // console.log(accumulator, currentvalue);
    return accumulator + currentvalue;

}, initialvalue)

//  console.log(myReduceArr);

/*

try it yourself

const myReduceArr = arr.reduce((accumulator, currentvalue,x,y,z,a,b) => {

    console.log(accumulator, currentvalue,x,y,z,a,b);
    return accumulator + currentvalue;

}, initialvalue)


*/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "js course",
        price: 4999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let product = "js course"

const total = shoppingCart.reduce((accumulator , currentvalue)=>{

    if(currentvalue.itemName === "js course"){
        console.log(`acc. ${accumulator}  curr ${currentvalue.price}`);
        return accumulator+currentvalue.price
    }

    return accumulator;// because if you don't return accumulator then it will return undefined and then it will add undefined with currentvalue.price and then it will return NaN.
  

},0)

console.log("total price of js course is " + total );




