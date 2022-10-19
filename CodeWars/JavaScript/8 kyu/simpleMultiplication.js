/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
}

// Sample tests

console.log(simpleMultiplication(2))
console.log(simpleMultiplication(3))