/*
Create a method to see whether the string is ALL CAPS.
*/

String.prototype.isUpperCase = function() {
    return [...this].every(x => x === x.toUpperCase())
}

// TESTS

console.log('Hello'.isUpperCase())
console.log('HELLO'.isUpperCase())
