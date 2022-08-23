/*
You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters
*/

function getMiddle(s) {
    let len = s.length
    let even = (len % 2 == 0) 
    let arr = s.split('')

    return even ? `${arr[len/2 - 1]}${arr[len/2]}` : arr[Math.ceil(len/2) - 1]
}

console.log(getMiddle('ted'))
console.log(getMiddle('brave'))
console.log(getMiddle('bravery'))
console.log(getMiddle('later'))
