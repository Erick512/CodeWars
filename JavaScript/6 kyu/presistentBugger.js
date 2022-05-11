/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit
*/

function persistence(num){
    if(num < 10) return 0
    let i = 0
    while(num.toString().length > 1){
        num = num.toString().split('').reduce((a, b) => a * b)
        i++
    }
    return i
}

// sample tests

console.log(presistence(999))