// sort the array of strings by length

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)    
}

// test

console.log(sortByLength(["Beg", "Life", "I", "To"]))