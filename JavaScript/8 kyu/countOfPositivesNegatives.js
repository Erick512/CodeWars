/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.


*/

function countPositivesSumNegatives(input) {

    if(!input) {return []}
    if(input.length == 0){ return []}
    // if(input.reduce((a, b) => a + b, 0) == 0 && input.length == 2) {return []}

    let positive = input.filter(x => x > 0).length
    let negative = input.filter(x => x < 0).reduce((a, b) => a + b, 0)

    return [positive, negative]
}

// tests

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, -0]))