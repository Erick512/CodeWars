/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, 
while ensuring there is exactly one space between each word. 

Punctuation marks should be treated as if they are a part of the word in this kata.
*/

// paramete: a string

// return: string with every other word reversed

// example: 'reverse this string, please!' => 'reverse siht string, !esaelp' 

function reverse(str){
    return str.split(' ').map((x, i) => {
        return i % 2 != 0 ? x.split('').reverse('').join('') : x
    }).join(' ').trim()
}

// tests

console.log(reverse('Revers this string, please!'))
