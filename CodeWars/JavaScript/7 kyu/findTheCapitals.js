/*
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital letters in the string.
*/

var capitals = function(word) {
    let arr = []
    word.split('').forEach((x, i) => {
        if(x === x.toUpperCase())
        arr.push(i)
    })
    return arr
}

// Sample tests

console.log(capitals('CodEWaRs'))