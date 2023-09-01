/*

let myDate = new Date();
console.log(myDate);
console.log(String(myDate)); // or myDate.toString() both are same
console.log(myDate.toString());

console.log(myDate.toDateString());// toDateString() method returns the date portion of a Date object in human readable form in American English , it only returns the date portion in human readable form , it doesnt return the time portion

console.log(myDate.toTimeString());// toTimeString() method returns the time portion of a Date object in human readable form in American English , it only returns the time portion in human readable form , it doesnt return the date portion

console.log(myDate.toLocaleString());// toLocaleString() method returns the date and time portion of a Date object in human readable form in American English , it returns the date and time portion in human readable form

console.log(myDate.toLocaleDateString());// toLocaleDateString() method returns the date portion of a Date object in human readable form in American English , it only returns the date portion in human readable form , it doesnt return the time portion

console.log(myDate.toISOString);//idk what it does;i will learn it later.


// let x = Date.now();
// console.log(x);//it will print the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

let myCreatedDate = new Date(2023,9,12,5,10,35);//new Date(year, month, day, hours, minutes, seconds, milliseconds) here month is 0 based index. 0 means January ... 11 means December

console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("2023-10-12 05:10:35");//here month is 1 based index. 1 means January ... 12 means December

console.log(myCreatedDate2.toString());

let myCreatedDate3 = new Date("1-1-2023");

console.log(myCreatedDate3.toString());


*/

//--------------------Date.now() method--------------------

let myDate = new Date("1978-1-2");//it can be any date in the past or future. it will return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(myDate.toString());


let myTime = Date.now();
console.log("its total dude " + myTime.toLocaleString());
console.log("--------------------------------------------------------------------");
console.log(myDate.getTime().toLocaleString());//toLocaleString() is used for comma seperated numbers.
//here we are getting the time in milliseconds from 1970-1-1 to 1978-1-2 .

/*

not important for now , i will learn it later , i am just writing it here for future reference. 

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());// it returns the day of the week. 0 means sunday ... 6 means saturday
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());//


*/

//convert milliseconds to seconds 

console.log(Math.floor(Date.now()/1000));//it will print the number of seconds elapsed since January 1, 1970 00:00:00 UTC.));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* toLocaleString() is somehoe complicated , i will learn it later , i am just writing it here for future reference. ijn toLocalestring() we can pass the object also .

for example :

const date = new Date();
const options = {
  timeZone: 'Asia/Kolkata', // Specify the desired time zone.
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false, // Use 24-hour format.
};

const formattedDate = date.toLocaleString('en-IN', options);
console.log(formattedDate);

*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







