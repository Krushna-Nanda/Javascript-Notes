# Object in JavaScript

In JavaScript, when you create an object using object literal notation like the one you provided:

```javascript
const myFirstObject = {
    firstName: "Rahul",
    lastName: "Kumar",
    age: 21,
    hobbies: ["coding", "reading", "gaming"],
    email: "rahul@gmail.com",
};
```

`myFirstObject` is a reference to an object that is created in memory. It's important to understand that in JavaScript, objects themselves are typically stored in the heap memory, while variables like `myFirstObject` hold references to these objects.

So, `myFirstObject` is not the actual object; it's a variable that points to the object in memory. If you were to create another variable and set it equal to `myFirstObject`, both variables would reference the same object in memory, like so:

```javascript
const anotherObject = myFirstObject;

console.log(myFirstObject === anotherObject); // Outputs: true (both variables reference the same object)
```

Changes made to the object through one variable would be reflected when accessing it through the other variable because they point to the same object in memory.

Understanding this reference behavior is important in JavaScript, especially when working with complex data structures and objects.

Certainly, here's a summarized version of how objects and references work in JavaScript:

```javascript
// Create an object using object literal notation
const myFirstObject = {
    firstName: "Rahul",
    lastName: "Kumar",
    age: 21,
    hobbies: ["coding", "reading", "gaming"],
    email: "rahul@gmail.com",
};

// Both myFirstObject and anotherObject reference the same object in memory
const anotherObject = myFirstObject;

// Changes made to the object are reflected through both references
myFirstObject.firstName = "John";
console.log(anotherObject.firstName); // Outputs: "John"
```

In this code, `myFirstObject` and `anotherObject` both reference the same object in memory created using object literal notation. Modifying the object through one reference (`myFirstObject`) also affects the other reference (`anotherObject`) because they both point to the same object in the heap memory. Understanding this reference behavior is crucial when working with objects in JavaScript.

## random concept , why we uses double inside bracket notation

The use of quotes around the property name, like `"age"`, when using bracket notation is not a matter of syntax but a requirement based on JavaScript's language rules. It's how JavaScript distinguishes property names from variables or other expressions.

Here's the fundamental reason why quotes are needed:

1. **Bracket Notation Expectation:** When you use bracket notation to access a property, JavaScript expects the value inside the brackets to be an expression that evaluates to a string. 

   For example, consider the expression `myObject[expression]`. Here, `expression` must resolve to a string because JavaScript is looking for a property name.

   Without the quotes, if you wrote `myFisrtObject[age]`, JavaScript would interpret `age` as a variable reference, not a string, which could lead to unexpected behavior or errors if `age` is not defined as a variable.

2. **Quotes Indicate String Literal:** Using quotes, like `"age"`, explicitly tells JavaScript that you are referring to the string `"age"` as the property name.

So, to summarize, the use of quotes around the property name when using bracket notation is not a "rule" per se, but rather it's a fundamental requirement of the JavaScript language to ensure that you are specifying a string literal as the property name.

Let me clarify what "as a variable reference" means in the context of JavaScript.

In JavaScript, when you use a word without quotes, like `age`, within square brackets as in `myObject[age]`, JavaScript interprets it as a variable reference, not as a string. It looks for a variable named `age` in the current scope and tries to use its value as the property name.

For example:

```javascript
const age = "age"; // Define a variable named "age"

const myObject = {
  age: 30,
};

console.log(myObject[age]); // Outputs: 30
```

In this case, we first define a variable `age` with the value `"age"`. Then, when we use `myObject[age]`, JavaScript treats it as if we wrote `myObject["age"]`, so it correctly accesses the `age` property of `myObject`.

However, if `age` were not defined as a variable, you would encounter a reference error:

```javascript
const myObject = {
  age: 30,
};

console.log(myObject[age]); // ReferenceError: age is not defined
```

To avoid confusion and ensure that you are explicitly specifying the property name as a string, it's a good practice to use quotes, like `myObject["age"]`, when using bracket notation. This makes it clear that you're referring to a property with the name `"age"`.

In JavaScript, when you define an object with numerical keys (e.g., `{ 0: "Rahul", 1: "Kumar" }`), you can access those properties using dot notation only if the keys are valid JavaScript identifiers. Valid identifiers in JavaScript must start with a letter, underscore (_), or dollar sign ($) and can be followed by letters, numbers, underscores, or dollar signs.

Since numerical keys do not meet the criteria for valid identifiers (they don't start with a letter, underscore, or dollar sign), you cannot access them using dot notation. Instead, you must use bracket notation to access properties with non-identifier keys.

Here's an example:

```javascript
const myObject = {
  0: "Rahul",
  1: "Kumar",
};

// This will not work with dot notation
console.log(myObject.0); // SyntaxError: Unexpected number

// Use bracket notation to access properties with numerical keys
console.log(myObject[0]); // Outputs: "Rahul"
console.log(myObject[1]); // Outputs: "Kumar"
```

In summary, you can only use dot notation for object properties that are valid JavaScript identifiers. For properties with non-identifier keys, like numerical keys, you must use bracket notation.

## -----------------------------------------------------------

## what is the difference between object.create and new object() ?

Both `Object.create()` and `new Object()` are ways to create objects in JavaScript, but they differ in how they create objects and handle inheritance.

1. **`Object.create()`**:

   - It creates a new object and allows you to specify a prototype object explicitly. The newly created object inherits properties and methods from the specified prototype.
   - You can create objects with specific prototypes, enabling you to implement inheritance.
   - It's more flexible when it comes to setting the prototype chain.
   - It allows you to create objects without invoking a constructor function.

   Example:
   ```javascript
   const customPrototype = {
     sayHello: function () {
       console.log(`Hello!`);
     },
   };

   const myObject = Object.create(customPrototype);//here we are creating a new object and specifying a prototype object explicitly , just like Object.prototype.

   myObject.sayHello(); // Outputs: "Hello!"
   ```

2. **`new Object()`**:

   - It creates a new object and inherits from the default `Object.prototype`. It provides basic object properties and methods by default (e.g., `toString()`, `hasOwnProperty()`).
   - It doesn't allow you to specify a custom prototype object directly. The prototype chain is fixed to `Object.prototype`.
   - It's a simpler way to create plain objects when you don't need specific prototypes.

   Example:
   ```javascript
   const myObject = new Object();
   myObject.name = 'John';
   myObject.age = 30;
   ```

In summary, use `Object.create()` when you need to create objects with custom prototypes or implement inheritance. Use `new Object()` when you need a simple plain object with the default `Object.prototype` as its prototype.

```markdown
```
#### Some Extra Insight

In JavaScript, when you define properties within an object literal (as you've done in your example), you should not use `const` or `let` to declare them. Instead, you simply specify the property names and their values. The `const` and `let` keywords are used for variable declarations, not for defining properties within an object literal.
```
```

The main difference between the two expressions:

```javascript
const obj8 = Object.assign({}, obj6, obj7);
```

and

```javascript
const obj8 = Object.assign(obj6, obj7);
```

```
```
Object.assign() is a built-in JavaScript method that is used to copy the values of one or more source objects into a target object. It is often used for object cloning and merging.

The main difference between the two expressions:

const obj8 = Object.assign({}, obj6, obj7);

and

const obj8 = Object.assign(obj6, obj7);

```
```

is how they treat the target object and what they return.

1. **`Object.assign({}, obj6, obj7)`**:

   - In this case, you're creating a new empty object `{}` as the target.
   - `Object.assign()` copies the properties from `obj6` and `obj7` into the new empty object.
   - The result is a new object `obj8` that is a clone of the properties from `obj6` and `obj7`. `obj6` and `obj7` themselves are not modified.
   - This is typically used for creating a shallow clone of objects, where the original objects (`obj6` and `obj7`) remain unchanged.

2. **`Object.assign(obj6, obj7)`**:

   - In this case, you're using `obj6` as the target object itself.
   - `Object.assign()` copies the properties from `obj7` into `obj6`.
   - The result is that `obj6` is modified to include the properties from `obj7`. It does not create a new object.
   - `obj6` is changed in place, and `obj7` remains unchanged.

So, the main difference is whether you want to create a new object (the first approach) or modify an existing object in place (the second approach). The choice depends on your specific use case and whether you want to preserve the original objects or not.

### what is shallow clone and deep clone ?

A shallow clone refers to the process of creating a new object that is a copy of an existing object, where only the top-level properties of the original object are duplicated into the new object. In other words, while the new object is a separate entity, if the original object contains nested objects or arrays, those nested objects and arrays are still referenced by both the original and the cloned object.

Here's an example to illustrate the concept of a shallow clone:

```javascript
const originalObject = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming"],
};

// Shallow cloning the originalObject
const clonedObject = { ...originalObject };

// Modifying the clonedObject
clonedObject.name = "Alice";
clonedObject.hobbies.push("painting");

console.log(originalObject.name); // Outputs: "John"
console.log(originalObject.hobbies); // Outputs: ["reading", "gaming", "painting"]
```

In this example, `clonedObject` is a shallow clone of `originalObject`. When we modify the `name` property of `clonedObject`, it does not affect the `name` property of the `originalObject`. However, when we push a new hobby into the `hobbies` array of `clonedObject`, it also affects the `hobbies` array of the `originalObject`. This is because both objects share a reference to the same `hobbies` array.

In a shallow clone, only the top-level properties are copied, but if there are nested objects or arrays within the original object, those nested structures are still shared between the original and the cloned object. To create a deep clone (a completely independent copy, including nested structures), you would need to use more advanced techniques, such as recursion or libraries like `lodash.clonedeep`.

#### what is top-level properties ?

Top-level properties refer to the properties of an object that are directly attached to the object itself and are not nested within another object or array. These properties are at the top level of the object's structure.

For example, consider the following object:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Exampleville",
    postalCode: "12345"
  }
};
```

In this object:

- `firstName`, `lastName`, `age`, and `address` are top-level properties because they are directly attached to the `person` object.
- Inside the `address` property, `street`, `city`, and `postalCode` are not top-level properties; they are nested properties because they are contained within the `address` object.

So, when we talk about creating a shallow clone, it means that only the top-level properties (in this case, `firstName`, `lastName`, `age`) are duplicated into the new object, while any nested properties (such as the `address` object) are still referenced from both the original and cloned objects.

```markdown
```
#### Some Extra Insight

Your understanding of top-level properties and nested properties is correct based on the example you provided. Here's a summary:

- Top-level properties are properties directly attached to the object itself.
- Nested properties are properties that are contained within another object or are part of a deeper level of the object's structure.

In the example you provided:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Exampleville",
    postalCode: "12345"
  }
};
```

- `firstName`, `lastName`, and `age` are top-level properties.
- `address` is also a top-level property, but it contains nested properties such as `street`, `city`, and `postalCode`.

When creating a shallow clone of the `person` object using the spread operator or similar techniques, only the top-level properties (`firstName`, `lastName`, and `age`) are duplicated into the new object. The nested `address` object is still referenced from both the original and cloned objects, which means changes to nested properties would be reflected in both objects.

```
```

The `Object.entries()` method is used to extract an object's own enumerable property `[key, value]` pairs and return them as an array of arrays. Each inner array contains two elements: the key and the corresponding value from the object.

Here's how it works:

```javascript
const tinderUser = {
  name: "Alice",
  age: 28,
  gender: "Female",
};

const entries = Object.entries(tinderUser);

console.log(entries);
```

In this example, `Object.entries(tinderUser)` would produce the following output:

```javascript
[
  ["name", "Alice"],
  ["age", 28],
  ["gender", "Female"]
]
```

It converts the `tinderUser` object into an array of `[key, value]` pairs, where each pair is represented as an inner array. This can be useful when you need to iterate through an object's properties or perform operations on its key-value pairs.

Certainly! Let's use a real-world analogy:

**Toolbox**: Imagine you have a toolbox, just like a carpenter's toolbox, but this one is magical and can be used by anyone. This toolbox contains various tools for building and fixing things.

**Tools Inside the Toolbox**: Inside this magical toolbox, you have tools like a hammer, a screwdriver, and a measuring tape.

Now, let's relate this to JavaScript:

- **Toolbox**: This is like the `Object.prototype` in JavaScript, a shared resource that provides useful tools for objects.

- **Tools Inside the Toolbox**: These are methods and properties you can use on objects, like `constructor`, `hasOwnProperty`, `toString`, and others. These tools help you work with and understand objects in JavaScript.

So, just as you'd use tools from a physical toolbox to build and repair things, in JavaScript, you use methods and properties from `Object.prototype` (the "toolbox") to work with and manipulate objects.

# create object using constructor function

```javascript
function person(name, age) {
  // Step 1: A new, empty object is created (this is the object to be returned).
  // Step 2: The constructor function is called with 'this' referring to the new object.
  this.name = name; // Step 3: Initialize properties on the new object.
  this.age = age;   // Step 3: Initialize properties on the new object.
  // Step 4: The new object is returned automatically.
}

// Creating a new object using the 'person' constructor.
const kc = new person('kc', 30);

// 'kc' is now an object with 'name' and 'age' properties.

```
Certainly, let's dive deeper into how `this` works inside a constructor function:

In JavaScript, when you define a constructor function like `personalbar`, it's meant to be used with the `new` keyword to create objects based on a blueprint. The `this` keyword inside the constructor refers to the object that is being created by that constructor. Here's a breakdown:

1. **Creating the Object**: When you call `new personalbar('kc', 30);`, a new, empty object is created. This object is what `this` refers to inside the `personalbar` constructor.

2. **Setting Properties**: Inside the constructor, you can use `this` to set properties on the newly created object. For example, `this.name = name;` means "set the `name` property of the object that `this` refers to to the value of the `name` parameter that was passed into the constructor."

3. **Custom Initialization**: The constructor allows you to customize the initial state of the object. In this case, you're initializing the `name` and `age` properties of the newly created object.

4. **Returning the Object**: When the constructor function finishes running, the newly created object (the one that `this` refers to) is automatically returned. You don't have to explicitly write `return this;` because it's done for you.

So, in simple terms, when you use `this.name = name;` inside the constructor:

- `this` refers to the object being created by the constructor (in your example, it's `kc`).
- `this.name` creates a property called `name` on that object.
- `name` on the right side of the assignment (`this.name = name;`) refers to the `name` parameter passed to the constructor.
- The assignment copies the value from the `name` parameter to the `name` property of the object.

As a result, after executing the constructor, the object has a `name` property with the value `'kc'`.

#### can i say that this.name means it adds a property name to the object kc , and then add the value of name that i passed as an argument to the constructor function ?

Exactly! You've got it. `this.name` inside the constructor means that you are adding a `name` property to the newly created object, and you're setting its value to the one that was passed as an argument when you created the object using the constructor.

In the context of the constructor:

- `this` refers to the object that's being created.
- `this.name` creates a property named `name` on that object.
- The value of `this.name` is set to the value passed as an argument when creating the object.

So, when you create an object like this:

```javascript
const kc = new personalbar('kc', 30);
```

The `kc` object will have a `name` property with the value `'kc'`, and an `age` property with the value `30`, as defined by the constructor.

# Object Destructuring

 Object destructuring syntax in JavaScript can be summarized as follows:

```javascript
const { property1, property2, ...rest } = object;
```

Here's an explanation of each part of the syntax:

- `const`: This is the variable declaration keyword, indicating that you are creating new variables to store the extracted properties.

- `{ property1, property2, ...rest }`: Inside curly braces `{}`, you list the properties you want to extract from the `object`. These properties should match the property names in the object you're destructuring.

  - `property1`, `property2`: These are the names of the variables where the extracted property values will be stored. They should match the property names in the object.

  - `...rest`: The `...` (spread/rest operator) followed by a variable name allows you to collect all remaining properties of the object into a new object called `rest`. This is useful when you want to extract only specific properties and collect the rest into a separate object.

- `=`: The assignment operator is used to assign values from the object's properties to the variables.

- `object`: This is the source object from which you are extracting properties.

Here are some examples to help you remember the syntax:

**Example 1: Basic Object Destructuring**

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, lastName, age } = person;
```

In this example, we're extracting `firstName`, `lastName`, and `age` properties from the `person` object and creating corresponding variables.

**Example 2: Using Rest Operator**

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, ...rest } = person;
```

Here, we're extracting `firstName` and collecting the rest of the properties into the `rest` object.

**Example 3: Renaming Variables**


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName: fName, lastName: lName, age } = person;
```

In this case, we're renaming the extracted properties while destructuring.

**Example 4: Using Default Values**

```javascript
const person = {
  firstName: "John",
  age: 30,
};

const { firstName, lastName = "Doe", age } = person;
```

Here, we're providing a default value for `lastName` in case it's missing from the `person` object.

By following this syntax and practicing with examples, you can easily remember and use object destructuring in your JavaScript code.

## Certainly! Let's use a real-world analogy:

 Let's demonstrate the difference between using object destructuring and not using it, and how object destructuring works.

**Example 1: Without Object Destructuring**

Suppose you have an object representing a person and want to extract values without object destructuring:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Extracting values without object destructuring
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;

console.log(firstName); // Output: "John"
console.log(lastName);  // Output: "Doe"
console.log(age);       // Output: 30
```

In this code, you extract the values by manually specifying variable names and assigning them from the `person` object.

**Example 2: With Object Destructuring**

Now, let's achieve the same result using object destructuring:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Using object destructuring to extract values
const { firstName, lastName, age } = person;

console.log(firstName); // Output: "John"
console.log(lastName);  // Output: "Doe"
console.log(age);       // Output: 30
```

In this code, you use object destructuring to extract values directly from the `person` object and assign them to variables with the same names as the object's properties.

**Difference and Benefits:**

1. **Readability:** Object destructuring makes the code more concise and readable by eliminating the need for repetitive assignments.

2. **Conciseness:** Object destructuring reduces the amount of code you need to write compared to manually assigning values to variables.

3. **Variable Names:** The variable names in the destructuring syntax match the property names, making it clear which value corresponds to which property.

4. **Default Values:** Object destructuring allows you to provide default values if a property is undefined or missing.

5. **Renaming Variables:** You can also rename variables while destructuring if you want to use a different variable name.

Here's an example of using a default value and renaming a variable:

```javascript
const person = {
  firstName: "John",
  age: 30,
};

// Using object destructuring with default value and renaming
const { firstName: fName, lastName = "Doe", age } = person;

console.log(fName);     // Output: "John"
console.log(lastName);  // Output: "Doe" (default value used)
console.log(age);       // Output: 30
```

As demonstrated, object destructuring simplifies the extraction of values from objects, improves code readability, and provides flexibility in handling object properties.



