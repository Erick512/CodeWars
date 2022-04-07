/*
Given an integral number, determine if it's a square number:
*/

var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
}

// Sample test

console.log(isSquare(25))
console.log(isSquare(10))
console.log(isSquare(9))
console.log(isSquare(18))