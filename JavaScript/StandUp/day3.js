// Description

/*

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

*/

// Parameters: array of integers as string and numbers.

// Returns: sum of the array values as if all were numbers

// Example: ['1', 2, '3', 4] => 10

/* Pseudo Code: 

    use reduce method on array to add each number, while adding parse the current number/string to Number.
    return array
*/


// Code

function sumOfNumbers(array) {

    return array.reduce((pre ,curr) => pre + Number(curr), 0)
}

// Tests

console.log(sumOfNumbers(['1', 2, '3', 4])) // 10
console.log(sumOfNumbers([9, 3, '7', '3'])) // 22
console.log(sumOfNumbers(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42 
