/*
Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.
*/

function reverseWords(str){
    return str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
}

// cases

console.log(reverseWords('Hi im erick'))