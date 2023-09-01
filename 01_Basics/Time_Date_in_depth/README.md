In JavaScript, `Date` is indeed a constructor function used to create instances of the `Date` object. However, `Date` also has a static method called `now()`.

Here's how it works:

1. **Date Constructor:** You can use the `Date` constructor to create a new `Date` object. For example:

   ```javascript
   const currentDate = new Date();
   ```

   This creates a `Date` object representing the current date and time.

2. **Date.now():** The `Date.now()` method is a static method of the `Date` object. You don't need to create an instance of `Date` to use it. Instead, you can call it directly like this:

   ```javascript
   const currentTimestamp = Date.now();
   ```

   `Date.now()` returns the current timestamp in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC). It's a convenient way to get the current time as a numeric value.

So, in your code:

```javascript
let x = Date.now();
```

You are using the `Date.now()` method to get the current timestamp in milliseconds and assign it to the variable `x`. `Date` is both a constructor for creating `Date` objects and a namespace that contains static methods like `now()`.

### its not complete yet , its complex topic , we will understand it later ............