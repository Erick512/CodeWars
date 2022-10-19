// Description

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Parameters: str
// Returns: word with its length in the same index 

// Example: "apple ban" --> ["apple 5", "ban 3"]

// Code

//start-here

function addLength(str) {

    let arr = str.split(' ')
    return arr.map(word => `${word} ${word.length}`)
}

// Tests
console.log(addLength('hello there my name is Erick'))
