/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

function doubleChar(str){
    return str.split('').map(x => x + x).join('')
}

// tests

console.log(doubleChar("1234!_"))
console.log(doubleChar("String"))
console.log(doubleChar("Hello World"))