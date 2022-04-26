/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

*/

function stringy(size) {
    return [...Array(size).keys()].map((x, i) => i % 2 ? x = '0': x = '1').join('')
}

// Sample test

console.log(stringy(6))
console.log(stringy(2))
console.log(stringy(12))