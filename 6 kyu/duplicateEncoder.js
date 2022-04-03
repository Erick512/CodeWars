/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
    let wordArr = word.toLowerCase().split('')
    return wordArr.map(x => wordArr.filter(f => f === x).length > 1 ? x = ')' : x = '(').join('')
}

// Sample tests

console.log(duplicateEncode("recede"))
console.log(duplicateEncode("(( @"))
console.log(duplicateEncode("Success"))