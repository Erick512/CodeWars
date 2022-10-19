/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x) {
    return x.reduce((a , b) => +a+ +b)
}

// Sample tests

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))