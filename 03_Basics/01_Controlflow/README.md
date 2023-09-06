In JavaScript, truthy values are values that are considered as "true" when evaluated in a Boolean context, while falsy values are values that are considered as "false." Here's a list of some common truthy and falsy values:

Truthy Values:
1. All non-empty strings: `'hello'`, `'0'`, `'false'`, etc.
2. All non-zero numbers: `1`, `-1`, `0.1`, etc.
3. The boolean value `true`.
4. All objects, including arrays and functions.
5. Instances of user-defined classes (objects created using constructors).

Falsy Values:
1. An empty string: `''` or `""`.
2. The number `0` (zero).
3. The boolean value `false`.
4. `null`.
5. `undefined`.
6. `NaN` (Not-a-Number).

Here are some examples to illustrate truthy and falsy values:

```javascript
// Truthy values
if ('hello') {
    console.log('This string is truthy.');
}

if (1) {
    console.log('The number 1 is truthy.');
}

if (true) {
    console.log('The boolean true is truthy.');
}

if ({}) {
    console.log('An empty object is truthy.');
}

// Falsy values
if ('') {
    console.log('An empty string is falsy.');
}

if (0) {
    console.log('The number 0 is falsy.');
}

if (false) {
    console.log('The boolean false is falsy.');
}

if (null) {
    console.log('null is falsy.');
}

if (undefined) {
    console.log('undefined is falsy.');
}
```

Understanding truthy and falsy values is important when working with conditions, such as `if` statements or ternary operators, as it determines how values are evaluated in Boolean expressions.
.

## extra

Sure, here's a more comprehensive list of values in JavaScript categorized as either truthy or falsy:

Truthy Values:
1. All non-empty strings: `'hello'`, `'0'`, `'false'`, etc.
2. All non-zero numbers: `1`, `-1`, `0.1`, etc.
3. The boolean value `true`.
4. All objects, including arrays and functions.
5. Instances of user-defined classes (objects created using constructors).
6. The special value `Infinity` and `-Infinity`.

Falsy Values:
1. An empty string: `''` or `""`.
2. The number `0` (zero).
3. The boolean value `false`.
4. `null`.
5. `undefined`.
6. `NaN` (Not-a-Number).
7. The special value `-0` (negative zero).
8. The empty object `{}` (but not objects with properties).

Here's an example that includes some of these values:

```javascript
// Truthy values
const truthyValues = ['hello', 1, true, {}, [], function() {}, Infinity];
truthyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy.`);
    }
});

// Falsy values
const falsyValues = ['', 0, false, null, undefined, NaN, -0];
falsyValues.forEach(value => {
    if (!value) {
        console.log(`${value} is falsy.`);
    }
});
```

This list covers most of the common values you'll encounter in JavaScript and their truthy or falsy status when used in Boolean contexts.

# null coalescing operator (??) in JavaScript

The null coalescing operator (`??`) is a logical operator that returns the value of its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns the value of its left-hand side operand.


The nullish coalescing operator (`??`) is a relatively new addition to JavaScript (introduced in ECMAScript 2020) that provides a concise way to handle null or undefined values. It's used to choose between two values based on whether a given variable is null or undefined.

Here's the basic syntax of the nullish coalescing operator:

```javascript
const result = variable ?? defaultValue;
```

- If `variable` is not null or undefined, `result` will be assigned the value of `variable`.
- If `variable` is null or undefined, `result` will be assigned the value of `defaultValue`.

Here are a few examples to illustrate its usage:

```javascript
// Example 1: Using a default value for an undefined variable
const name = undefined;
const defaultName = "John";
const result = name ?? defaultName;
console.log(result); // Output: "John"

// Example 2: Using a default value for a null variable
const age = null;
const defaultAge = 30;
const result2 = age ?? defaultAge;
console.log(result2); // Output: 30

// Example 3: Not using a default value for a defined variable
const score = 0;
const result3 = score ?? 100;
console.log(result3); // Output: 0 (0 is not null or undefined)

// Example 4: Not using a default value for an undefined variable
const city = undefined;
const result4 = city ?? "New York";
console.log(result4); // Output: "New York"
```

The nullish coalescing operator is particularly useful when you want to provide a default value for a variable but only if that variable is specifically null or undefined, not for other falsy values like `0`, `''`, or `false`. It provides a more precise way of handling default values compared to the traditional OR (`||`) operator, which treats any falsy value as needing a default.