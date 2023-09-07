// aceesing object properties using for loop

const person = {
  name: "John",
  age: 30,
  profession: "Engineer",
};

const keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = person[key];
  console.log(`${key}: ${value}`);
}

## Maps in JavaScript

In JavaScript, a "map" can refer to two different concepts:

1. **Map Data Structure (`Map`):** A "map" in JavaScript often refers to the `Map` data structure, which is one of the built-in data structures introduced in ECMAScript 6 (ES6). A `Map` is a collection of key-value pairs, where each key can be of any data type, and each key is associated with a value. Unlike plain objects, `Map` objects can use any data type (including objects and functions) as keys and maintain the order of key-value pairs.

   Here's how you can create and use a `Map`:

   ```javascript
   const myMap = new Map();

   // Adding key-value pairs to the map
   myMap.set('name', 'John');
   myMap.set('age', 30);

   // Retrieving values from the map
   console.log(myMap.get('name')); // 'John'
   console.log(myMap.get('age'));  // 30
   ```

   `Map` is often used when you need to associate values with specific keys, and it provides a more versatile alternative to plain objects in many cases.



### difference between object and map in javascript ?

While both JavaScript objects and `Map` data structures serve the purpose of storing key-value pairs, there are some important differences between the two:

1. **Key Types:** 

   - **Objects:** In JavaScript objects, keys are always converted to strings. If you try to use a non-string data type as an object key, it will be implicitly converted to a string. For example:

     ```javascript
     const myObject = {};
     const key = 42;
     myObject[key] = 'value';

     console.log(myObject['42']); // 'value' (key converted to string)
     ```

   - **Map:** In `Map` data structures, keys can be of any data type, including objects, functions, and primitive types, without automatic conversion. This means you can use any value as a key without worrying about unintended type conversions:

     ```javascript
     const myMap = new Map();
     const key = 42;
     myMap.set(key, 'value');

     console.log(myMap.get(42)); // 'value' (key remains as 42, not converted)
     ```

2. **Order of Key-Value Pairs:**

   - **Objects:** Before ECMAScript 2015 (ES6), object properties were not guaranteed to be stored in a specific order. While modern JavaScript engines generally maintain property order, it's not officially guaranteed by the language specification.

   - **Map:** `Map` objects maintain the order of key-value pairs based on the order of insertion. This means that when you iterate over the keys or values of a `Map`, you get them in the same order they were added.

3. **Size Property:**

   - **Objects:** To get the number of properties in an object, you need to manually count them or use a loop. There is no built-in property that directly provides the size of an object.

   - **Map:** `Map` objects have a built-in `size` property that returns the number of key-value pairs in the map, making it convenient to determine the size of a `Map` without additional code.

Here's a summary: `Map` objects are more versatile and predictable for storing key-value pairs, especially when you need to use non-string keys or maintain a specific order. JavaScript objects are still useful for many purposes, but they have limitations compared to `Map` when it comes to key types and order preservation. Your choice between them depends on your specific requirements.

#### difference between for in and for of in javascript ?

`for...in` and `for...of` are both loop constructs in JavaScript used for iteration, but they serve different purposes and work with different types of data:

1. **`for...in` Loop:**

   - Purpose: `for...in` is primarily used to iterate over the enumerable properties (keys) of an object. It's commonly used with objects to access their keys, allowing you to perform operations on the keys or access the corresponding values.

   - Example with an Object:
     ```javascript
     const person = { name: 'John', age: 30 };

     for (const key in person) {
       console.log(key, person[key]); // Outputs: 'name John', 'age 30'
     }
     ```

   - Enumerates: Keys/properties of an object.
   - Works with: Objects, including their own properties and prototype properties.

2. **`for...of` Loop:**

   - Purpose: `for...of` is used to iterate over the values of iterable objects like arrays, strings, Sets, Maps, and more. It provides a convenient way to access and work with the values directly.

   - Example with an Array:
     ```javascript
     const numbers = [1, 2, 3];

     for (const value of numbers) {
       console.log(value); // Outputs: 1, 2, 3
     }
     ```

   - Enumerates: Values of an iterable.
   - Works with: Arrays, strings, Sets, Maps, and other iterable objects.

Key Differences:

- `for...in` iterates over object keys/properties, while `for...of` iterates over iterable values.
- `for...in` is generally used with objects, and it can access both own and inherited properties (unless filtered), whereas `for...of` is primarily used with iterable collections.
- `for...of` is not suitable for iterating over plain objects because they are not iterable by default. However, you can use it with arrays, strings, Maps, Sets, and other built-in iterable objects.
- `for...in` can be used with objects, including prototypes, to access their keys. It's often used for tasks like object property enumeration.
- `for...of` is more concise and straightforward when working with arrays and other iterable data structures, as it directly provides access to values without needing to access them by key or index.

In summary, choose `for...in` when you need to work with object properties, and use `for...of` when you want to iterate over the values of iterable objects like arrays and strings.
```
#### some extra question
```
```
I see what you mean now. When you iterate over a `Map` using a `for...of` loop as shown in your code:

```javascript
for (const key of myMap) {
  console.log(key);
}
```

It returns an iterable `(An "iterable" is a data structure in JavaScript that can be looped over or iterated through using a loop construct, such as a for...of loop or a forEach loop.)` of key-value pairs represented as arrays with two elements: the key and the corresponding value. So, what you are logging with `console.log(key);` in your loop is each of these arrays.

Here's what it returns when you run the loop:

```
[ 'name', 'krushna' ]
[ 'age', 23 ]
[ 756030, 'amarda road' ]
```

Each line represents one iteration of the loop, and it prints an array with the key as the first element and the corresponding value as the second element for each key-value pair in the `Map`.

In the code you provided:

```javascript
for (const [key, value] of myMap) {
  console.log(key, ':-', value);
}
```

You are using destructuring assignment within the `for...of` loop to directly extract the key and value from each key-value pair in the `Map`. Here's what happens:

for (const [key, value] of myMap) {
  console.log(key, ':-', value);
}

1. `myMap` is a `Map` object containing key-value pairs.

2. The `for...of` loop is used to iterate over the entries (key-value pairs) of the `Map`. 

3. In each iteration of the loop, the `[key, value]` part is used for destructuring. This means that for each key-value pair in the `Map`, the `key` variable will be assigned the key, and the `value` variable will be assigned the value from that pair.

4. The `console.log` statement then prints out both the key and value for each pair, separated by a colon and hyphen (": -").

You can iterate over a `Map` using a `for...of` loop because a `Map` is an iterable data structure in JavaScript. Iterable objects have an internal mechanism (an iterator) that allows you to loop through their elements or entries in a predictable order.

On the other hand, a plain JavaScript object (`{}`) is not inherently iterable. It doesn't have an iterator built into it, which is why you cannot use a `for...of` loop directly with objects. Instead, JavaScript provides the `for...in` loop for iterating over the properties (keys) of an object.

Here's the key difference:

- `Map` is designed to be iterable, and it maintains a specific order for its entries, making it suitable for use with `for...of` loops.

- Objects, while they allow you to associate keys with values, don't inherently maintain any particular order for their properties. They use the `for...in` loop for property enumeration.

If you want to iterate over the properties and values of an object, you typically use a `for...in` loop or other techniques like `Object.keys()`, `Object.values()`, or `Object.entries()` introduced in ES6. These methods can help you work with the properties and values of objects in a more structured and predictable way.

# **Question:**

If objects don't have a built-in iterator, how does the `for...in` loop work without an iterator?

You bring up a good point. The `for...in` loop in JavaScript works for objects without an explicit built-in iterator because it leverages the prototype chain and enumerates the keys (property names) of the object, including those inherited from the object's prototype. 

Here's how the `for...in` loop works with objects:

1. It iterates over all enumerable properties (own and inherited) of the object.
2. For each property (key), it executes the loop body.

So, the `for...in` loop doesn't need an explicit iterator like the `for...of` loop because it is designed specifically for object property enumeration. It essentially goes up the prototype chain and iterates over all enumerable properties it finds.

However, this behavior of `for...in` can sometimes lead to unexpected results when objects have properties inherited from their prototypes. To avoid this, you can use methods like `Object.hasOwnProperty()` to filter out only the object's own properties or use more modern techniques like `Object.keys()`, `Object.values()`, or `Object.entries()` introduced in ECMAScript 5 (ES5) or later, which provide more control and predictability when working with object properties.
##### ----------------------------------
```
for (const key in arr) {
   console.log(arr[key]);
}

```
> In JavaScript, the keys of an array are numeric indices, which are represented as non-negative integers.
##### ----------------------------------

# Foreach loop in javascript

The `forEach` loop is not actually a loop, but rather a higher-order function provided by JavaScript arrays and some other iterable objects. It is used to iterate over the elements (or values) of an array and perform a specified operation (a function) on each element. Here's the basic syntax of the `forEach` loop:

```javascript
array.forEach(function(currentValue, index, array) {
  // Code to be executed for each element
});
```

- `array`: The array to be iterated.
- `currentValue`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array `forEach` was called upon.

Here's an example of how to use `forEach` to iterate over an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Element at index ${index} is ${number}`);
});
```

In this example, the `forEach` loop iterates over the `numbers` array, and for each element, it executes the provided function, which logs the element and its index.

You can also use an arrow function for brevity:

```javascript
numbers.forEach((number, index) => {
  console.log(`Element at index ${index} is ${number}`);
});
```

The `forEach` loop is a convenient way to perform an operation on each element of an array without the need for a traditional `for` or `while` loop.

# Higher order function in javascript 

A higher-order function is a function that takes another function as an argument, or returns a function as a result. Here's a simple example of a higher-order function that takes a function as an argument:

```javascript
function higherOrder(fn) {
  fn();
}

A higher-order function is a concept in computer science and functional programming that refers to a function that meets one or both of the following criteria:

1. It takes one or more functions as arguments (parameters).
2. It returns a function as its result.

In other words, a higher-order function is a function that either accepts other functions as input or produces functions as output. This concept is closely associated with functional programming, which treats functions as first-class citizens, allowing them to be manipulated and operated upon like any other data type.

Here are some common examples of higher-order functions:

1. **Map:** The `map` function takes a transformation function and applies it to each element of an array, returning a new array with the transformed values.

2. **Filter:** The `filter` function takes a predicate function and returns a new array containing only the elements that satisfy the given condition.

3. **Reduce:** The `reduce` function takes an accumulation function and uses it to reduce an array of values to a single value (e.g., summing all elements).

4. **Callback Functions:** Functions that are passed as arguments to other functions, such as event handlers or asynchronous callbacks, are also examples of higher-order functions.

Here's a simple example in JavaScript:

```javascript
// Higher-order function that accepts a function as an argument
function operateOnArray(array, operation) {
  const result = [];
  for (const item of array) {
    result.push(operation(item));
  }
  return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = operateOnArray(numbers, function (x) {
  return x * x;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

In this example, `operateOnArray` is a higher-order function because it takes a function (`operation`) as an argument and applies it to each element of the `numbers` array.

Higher-order functions provide a powerful way to abstract and modularize code, enabling more flexible and reusable software components. They are a fundamental concept in functional programming and are widely used in modern JavaScript and other programming languages.

# Callback function in javascript

A function passed to another function is called a callback
In your code:

```javascript
arr.forEach(function(values, index, arr) {
    console.log(`value is ${values} and index is ${index}`);
});
```

The callback function is the anonymous function you've defined inside the `forEach` method:

```javascript
function(values, index, arr) {
  console.log(`value is ${values} and index is ${index}`);
}
```

This anonymous function is a callback because it's passed as an argument to the `forEach` method, and it will be executed for each element in the `arr` array. The `forEach` method calls this callback function once for each element, passing the current element's value, index, and the array itself as arguments.

# Filter function in javascript

Let's discuss the concepts of `filter`, `map`, and `reduce` in JavaScript. These are three important array methods that are used for processing and transforming arrays. I'll provide an overview of each one and how they work:

1. **`filter` Method:**
   
   The `filter` method is used to create a new array containing all elements that pass a given test (predicate function). It iterates through the array and includes elements in the new array for which the callback function returns `true`. Here's the basic syntax:

   Example:

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.filter((num) => num % 2 === 0);
   // evenNumbers will contain [2, 4]
   ```

>>`A predicate function, in the context of the filter method or similar operations, is a function that tests a specific condition or criteria and returns either true or false based on whether the condition is met for a given element. In other words, it's a function that determines whether an element should be included in the filtered result.`
```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
```
>The predicate function is (num) => num % 2 === 0. It takes each num (element) from the numbers array and checks if it's even (the condition num % 2 === 0 returns true for even numbers and false for odd numbers). If the condition is true, the element is included in the evenNumbers array; otherwise, it's excluded.

So, in this case, the predicate function tests whether a number is even, and only even numbers are included in the evenNumbers array as a result of the filter operation.
# ===================================
### Some Fundamentals 

No, you cannot access the properties of objects within the `myNewArr` array using `myNewArr.name` because `myNewArr` is an array of objects, not a single object. To access the properties of objects within the array, you need to specify an index to access a specific object and then use dot notation or bracket notation to access the properties of that object.

For example, to access the `name` property of the first object in the array, you can do the following:

```javascript
const firstObject = myNewArr[0];
const firstName = firstObject.name;
console.log(firstName); // This will log "krushna"
```

Alternatively, you can chain the access in a single line like this:

```javascript
const firstName = myNewArr[0].name;
console.log(firstName); // This will also log "krushna"
```

Similarly, you can access properties of other objects in the array by specifying the appropriate index (0, 1, 2, etc.) within square brackets `[index]` and then using dot notation to access the properties of each object.

```
const myNewArr = [
    {
        name:"krushna",
        age:23,
    },
    {
        name:"kumar",
        age:23,
    }
];

myNewArr.forEach((value,index,myNewArr)=>{//it also handle the array of  objects.like above example.

 console.log(value.name);
})

here in this case how value acces the properties without usaing "[0]"  this type of index.

```

In the `forEach` method callback, the `value` parameter represents each element of the `myNewArr` array one by one as it iterates through the array. Since `myNewArr` is an array of objects, each `value` in this context refers to one of those objects.

When you access `value.name`, you are using dot notation to access the `name` property of the current object. In each iteration of the `forEach` loop, `value` is set to the current object in the array, and `value.name` is used to access the `name` property of that specific object.

So, in your code, `value.name` allows you to access the `name` property of each object within the array without the need for `[0]` or an index. The `forEach` loop handles this iteration for you, providing each object in the array as `value`
 during each iteration.
 ###  -============-==================-=-=================================----==========================
In arrow functions, when the function body consists of a single expression, you can omit the curly braces and the `return` statement. The result of the expression is implicitly returned. For example:

```javascript
const result = (x) => x * 2;
```

In this case, `x * 2` is a single expression, and it's implicitly returned.

However, when using the `function` keyword for traditional functions, you must use the `return` statement explicitly to return a value, even if it's a single expression. For example:

```javascript
const result = function (x) {
  return x * 2;
};
```

I apologize for any confusion in my previous responses, and thank you for pointing out the correct usage of `return` with `function` keyword functions.

# =========================================================================

# Map function in javascript

The `map` function in JavaScript is an array method used to create a new array by applying a specified function to each element of an existing array. It essentially transforms each element of the original array and collects the results in a new array, which is returned as the output. The original array remains unchanged.

Here's the basic syntax of the `map` function:

The `callback` function is applied to each element of the array, and the return value of the `callback` function is collected in the new array. The `map` function then returns this new array.

Here's an example of using the `map` function:

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
// squaredNumbers will contain [1, 4, 9, 16, 25]
```

In this example, we have an array of numbers, and we use the `map` method to create a new array called `squaredNumbers` by squaring each element of the original array.

The `map` function is commonly used for tasks like transforming data, applying mathematical operations, or extracting specific properties from objects within an array. It's a powerful tool for data manipulation and is often used in combination with other array methods to perform complex operations on arrays of data.

# Reduce function in javascript

The `reduce` function in JavaScript is an array method used to reduce an array of values down to a single value. It executes a callback function on each element of the array and returns a single value as the result. The original array remains unchanged.

Here's the basic syntax of the `reduce` function:

```javascript
array.reduce(callback, initialValue);
```

# - `some fundamental stuff in reduce function`
```
const myReduceArr = arr.reduce((acc, curr) => {
    console.log(acc + "  " + curr);
    return acc + curr;
}, initialValue);
```
### **`question`**: can i say that "  first reduce function get one value of array then pass it to the call back function , then when call back function return the value the higher order function in this case (reduce) " assign that value to the acc varible ? am i right or wrong ? i hve a another doubt , is reduce function automatically assign the value to acc or what how does it work . and who call the call back function.

In the code you provided:

```javascript
const myReduceArr = arr.reduce((acc, curr) => {
    console.log(acc + "  " + curr);
    return acc + curr;
}, initialValue);
```

- `reduce` is the higher-order function.
- The callback function `(acc, curr) => {...}` is provided as an argument to `reduce`.
- `initialValue` is an optional initial value that you can provide.

Here's how it works step by step:

1. **Initialization**: If you provided an `initialValue`, `acc` is initially set to that value; otherwise, `acc` is initialized with the first element of the array.

2. **Iteration**: The `reduce` function iterates through the array one element at a time.

3. **Callback Function**: In each iteration, the callback function `(acc, curr) => {...}` is called automatically by the `reduce` function.

4. **Arguments**: The `acc` parameter is assigned the current accumulated value, and the `curr` parameter is assigned the current element from the array.

5. **Execution of Callback**: The callback function executes its logic, which in this case logs the values of `acc` and `curr`, and then returns a new value that becomes the new value of `acc` in the next iteration.

6. **Repeat**: This process repeats for each element in the array, with `acc` accumulating the result of the additions.

7. **Final Result**: The final result of the `reduce` operation is the value stored in `myReduceArr`.

So, to answer your questions:

- **Accumulator Assignment**: The `reduce` function automatically assigns the value returned by the callback function to the accumulator (`acc`) in each iteration.

- **Callback Invocation**: The callback function is called automatically by the `reduce` function during each iteration. You don't need to call it explicitly; `reduce` takes care of that.

The `reduce` function manages the entire process of iterating through the array, calling the callback function, and updating the accumulator. It's a built-in feature of JavaScript designed to simplify the process of reducing an array to a single value based on a specified operation.


### **`question`**:"Can I say that already the logic defined inside the higher-order function determines which value should be passed to which parameter (here, it means, suppose I have two parameters, then to which parameter the value should be passed, no1 or no2) is determined by the higher-order function. We, as users, don't have to worry about it. Am I right or wrong?"

yes ! You are correct. In the context of higher-order functions like `reduce`, the logic for which value should be passed to which parameter (e.g., `acc` or `curr`) is determined by the higher-order function itself. As a user of the `reduce` function, you don't have to explicitly specify how these values are passed; the `reduce` function manages that internal process for you.

Here's a breakdown of the roles:

- The higher-order function (`reduce` in this case) defines the overall process of iterating through the array, calling the callback function, and managing the accumulator (`acc`) and current element (`curr`).

- The callback function is provided by the user and defines the specific operation to be performed on each element and how to update the accumulator. The higher-order function (e.g., `reduce`) ensures that the correct values are passed as arguments to the callback function.

So, you can focus on defining the logic inside the callback function (how to use `acc` and `curr`) and trust that the higher-order function will handle the mechanics of passing values between them during the iteration. This abstraction simplifies the code and makes it easier to work with arrays in JavaScript.


#### whats wrong with this code ?

```javascript

let product = "js course"

const total = shoppingCart.reduce((accumulator , currentvalue)=>{

    if(currentvalue.itemName === "js course"){
        console.log(`acc. ${accumulator}  curr ${currentvalue.price}`);
        return accumulator+currentvalue.price
    }

},0)

console.log("total price of js course is " + total );

it print undefined why ?

``` 

The issue with your code is that the `reduce` callback function must return a value in all cases. In your code, the callback only returns a value when `currentvalue.itemName === "js course"`, and it doesn't return anything otherwise. This leads to `undefined` being returned for the cases when the condition is not met.

To fix this issue, you should make sure that the callback function returns the accumulator in all cases, even when the condition is not met. You can do this by adding a `return accumulator;` statement outside of the `if` condition. Here's the corrected code:

```javascript
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
];

let product = "js course";

const total = shoppingCart.reduce((accumulator, currentValue) => {
    if (currentValue.itemName === product) {
        console.log(`acc. ${accumulator}  curr ${currentValue.price}`);
        return accumulator + currentValue.price;
    }
    return accumulator; // Return the accumulator even if the condition is not met
}, 0);

console.log("total price of js course is " + total);
```

With this change, the `reduce` function will always return a value, and the total price of "js course" will be correctly calculated and printed.

