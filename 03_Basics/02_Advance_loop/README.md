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