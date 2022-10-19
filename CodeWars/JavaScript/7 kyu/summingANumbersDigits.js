/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
*/

function sumDigits(number) {
    let digits = [...number.toString().split('')]
    return digits.reduce((a, b) => a + +Math.abs(b) || 0, 0)
}

// tests

console.log(sumDigits(-32))