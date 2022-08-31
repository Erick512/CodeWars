/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
See test cases for more examples.


*/

function capitalize(s) {
    return [
        [...s].map((x, i) => i % 2 == 0 ? x.toUpperCase() : x.toLowerCase()).join(''), 
        [...s].map((x, i) => i % 2 != 0 ? x.toUpperCase() : x.toLowerCase()).join('')]
}

// tests

console.log(capitalize('hello'))
console.log(capitalize('capitalization'))