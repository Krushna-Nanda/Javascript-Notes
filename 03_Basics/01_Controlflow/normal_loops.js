
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let no = RandomInt(1,10);
let noenterbyuser;

do {
     noenterbyuser = prompt("Enter a number:");

    // Convert user input to a number
    noenterbyuser = Number(noenterbyuser);

    if (noenterbyuser === no) {
        alert("Yay! Buddy, your number matched!");
        break;
    }
} while (noenterbyuser != no);


// function addNumber(...nos) {
//   let sum = 0;
//   for (let index = 0; index < nos.length; index++) {

//     sum += nos[index];

//   }

//   return sum;


// }


// let sum = addNumber(1, 2, 3, 4);


// console.log(sum);




// for loop

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
//     }


//while loop 

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
let i = 0;
do{
    console.log(`value of i = ${i}`);
    i++;

}while(i < 10);
