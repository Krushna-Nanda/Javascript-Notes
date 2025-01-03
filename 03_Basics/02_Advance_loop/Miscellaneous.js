const my_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"krushna"];

// let ans = my_arr.find((value)=> 2*2*9 === value)

// console.log(ans);

// let anss = my_arr.findIndex((value)=> "krushna" === value)

// console.log(anss);

// console.log(my_arr.includes(8));




function checker (value){


    return value % 2 === 0
}

const new_arr = my_arr.filter(checker)

console.log(new_arr);



/*
let new_arr = my_arr.map((value)=> value % 2 === 0) // this show the diff between filter and map that why we use filter instead of map for this type of operation
console.log(new_arr);


*/
