# 1st code // there is something wrong in this code // recusrsion


```
let min = 1;
let max  = 1;

let no  = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(no);

function repeat(){
  let guess_no = prompt("Guess the number between 1 and 10");

if(guess_no === null){
  console.log("game canclled mf");
  return;
}

guess_no = Number(guess_no);

if(isNaN(guess_no)){
  console.log("its not a no man");
  repeat();
  
}

  if (guess_no === no){
    console.log("you win");
    return;
  }
  else{
    console.log("try again man");
  
    repeat();
    
  }

}

repeat();

```

# part 2 // a classic exmaple that how call stack work in recursion in js

```javascript
let min = 1;
let max  = 1;

let no = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number

function repeat() {
  console.log("repeat() started");  // 🚀 Function starts

  let guess_no = prompt("Guess the number between 1 and 10");

  if (guess_no === null) {
    console.log("Game cancelled, mf");
    console.log("repeat() ends (game cancelled) ✅");  
    return;  // ✅ Stops execution if user cancels
  }

  guess_no = Number(guess_no);

  if (isNaN(guess_no)) {
    console.log("It's not a number, man!");
    repeat();  
    return;  // ✅ Stops old function call from continuing
  }

  if (guess_no === no) {
    console.log("You win!");
    console.log("repeat() ends (game should stop here!) ✅");  
    return;  // ✅ Stops old function call from continuing
  } else {
    console.log("Try again, man!");
    repeat();  
    return;  // ✅ Stops old function call from continuing
  }
}

repeat();
```



