// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

// parameters: string of words
// return: array of the words sorted by thier last letter
// example: ('main i need a taxi to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'main', 'to', 'up']

function reveresedWords(string) {

    // pseudo code
    // split string into array of words
    // sort by last index

    return string.split(' ').sort((a, b) => {
        if( a[a.length - 1] < b[b.length - 1] ) {
            return -1 
        }
        return 1
    })
   
}

// test

console.log(reveresedWords('man i need a taxi up to ubud'))
console.log(reveresedWords('what time are we climbing up the volcano'))
console.log(reveresedWords('take me to semynak'))