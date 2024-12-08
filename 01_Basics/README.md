### Hoisting in JavaScript

**Hoisting** is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use a function or variable before it is declared in the code.

#### Hoisting of Variables

Variables declared with `var` are hoisted to the top of their function scope and initialized with `undefined`. Variables declared with `let` and `const` are hoisted as well but are not initialized, which leads to a "temporal dead zone" until the declaration is encountered.

**Example with `var`**:
```javascript
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10
```

In this example, the declaration `var a` is hoisted to the top, so the first `console.log(a);` does not throw an error but outputs `undefined`.

**Example with `let`**:
```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20
```

In this example, `let b` is hoisted but not initialized, resulting in a `ReferenceError` when accessed before its declaration.

#### Hoisting of Functions

Function declarations are hoisted entirely, meaning the function can be called before its declaration in the code.

**Example with Function Declaration**:
```javascript
sayHello(); // Output: Hello, world!

function sayHello() {
    console.log("Hello, world!");
}
```

In this example, the function `sayHello` is hoisted, so it can be called before its declaration.

#### Summary

- **Variable Hoisting**:
  - `var`: Hoisted and initialized with `undefined`.
  - `let` and `const`: Hoisted but not initialized (temporal dead zone).
- **Function Hoisting**:
  - Function declarations are hoisted entirely.

Hoisting allows for flexible code writing but understanding its nuances helps avoid potential pitfalls.
