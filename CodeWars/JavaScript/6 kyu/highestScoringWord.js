/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLocaleLowerCase());
    
    let values = x.split(' ').map(x => x.split('').reduce((pre, curr) => pre + (alphabet.indexOf(curr)) + 1, 0))
    let index = values.indexOf(Math.max(...values))
    return x.split(' ')[index]
}

// Sample tests

console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))