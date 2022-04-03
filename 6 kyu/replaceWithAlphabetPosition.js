/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
    
// create array with the ascii code of the lower case letters
const alpha = Array.from(Array(26)).map((e, i) => i + 97);

// convert code to letters
const alphabet = alpha.map((x) => String.fromCharCode(x));

// lower case and convert text to array to filer out non alphabet characters
let textFiltered = text.toLowerCase().split('').filter(x => alphabet.includes(x))

// map the fileterd text to get the index of the letter in the alphabet then create to string
return textFiltered.map( x => alphabet.indexOf(x) + 1).join(' ')
}

// Test

console.log(alphabetPosition("The sunset sets at twelve o' clock."))