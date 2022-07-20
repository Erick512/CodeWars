/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
and returns the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
*/

function toWeirdCase(string) {
    let strArr = string.split(' ')
    return strArr.map(word => {

        // console.log(word)

        return word.split('').map((letter, i) => {
            if(i % 2 == 0) {
                return letter.toUpperCase()
            }
            return letter.toLowerCase()
        }).join('')

    }).join(' ')
}

// tests

console.log(toWeirdCase('this'))
console.log(toWeirdCase('this is a test'))