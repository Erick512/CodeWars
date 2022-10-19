/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
Examples of numerical palindromes are:

232
110011
54322345

Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. 
Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). 
Return "Not valid" if the input is not an integer or is less than 0.

For this kata, single digit numbers are NOT considered numerical palindromes.
*/

function palindrome(num) { 
  
    if(typeof num === 'string' || num < 0) {
        return "Not valid"
    } else if (num == 10 || num < 10) {
      return false
    }else if ( num < 100){
        return true
    }

    let numArr = num.toString().split('')
    let filterdLength = numArr.map(x => numArr.filter(e => e == x).length % 2 == 0).filter(x => x == true).length
    
    return numArr.length % 2 == 0 ? filterdLength == numArr.length
    : filterdLength == numArr.length - 1
}



// Sample Tests

console.log(palindrome(-7653356))
console.log(palindrome(2332))
console.log(palindrome(1212))
console.log(palindrome("ACCDDCCA"))
console.log(palindrome('1212'))
console.log(palindrome(20))
console.log(palindrome(66))