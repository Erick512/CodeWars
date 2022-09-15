/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {

    let des = new Set(a)

    return Array.from(des)
}

// tests

console.log(distinct([1,2,3,3,3,]))