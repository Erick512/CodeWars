/*
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.
*/

var summation = function (num) {
    return [ ...Array(num).keys() ].map((_, i) => i + 1)
    // .reduce((a, b) =>  a + b)
}

// Sample Tests

console.log(summation(8))