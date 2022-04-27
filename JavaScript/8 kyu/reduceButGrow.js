/*
Given a non-empty array of integers, 
return the result of multiplying the values together in order
*/

function grow(x){
    return x.reduce((a,b) => a * b)
}

// Sample tests

console.log(grow([1,2,4]))
console.log(grow([1,2,4,5,1,3]))
console.log(grow([2,2,2,2,2,2]))