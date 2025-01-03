Array.prototype.myFind = function(callback) {
    // Loop through each element in the array
    for (let i = 0; i < this.length; i++) {
        // Call the callback with current element, index, and array
        if (callback(this[i], i, this)) {
            // If the callback returns true, return the current element
            return this[i];
        }
    }

    // If no element satisfies the condition, return undefined
    return undefined;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.myFind(function(element) {
    // Callback function checks if the current element is equal to 5
    return element === 5;  // This is the condition we're looking for
});

console.log(result);  // Output: 5

/*
How It Works Internally in .find():
javascript
Copy code
Array.prototype.find = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];  // Return the element when condition is satisfied
        }
    }
    return undefined;  // No match, return undefined
};
Summary:
The callback function is a condition function that checks each element of the array to see if it matches the search criteria.
Internally, .find() loops through the array, applies the callback, and stops as soon as it finds the matching element.
The callback function looks like: function(element, index, array) where you define your matching condition (in this case, element === 5).
*/
