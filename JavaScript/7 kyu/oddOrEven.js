/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array) {
    return array.reduce((a, b) => a+b, 0) % 2 == 0 ? 'even' : 'odd'
}

// Sample tests

console.log(oddOrEven([0]))
console.log(oddOrEven([2,3,5]))