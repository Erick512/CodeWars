/*
Given an array of integers, return a new array with each value doubled.
*/

function maps(x) {
    return x.map(x => x+x)
}

// Sample test

console.log(maps([2,4,66,7,6]))