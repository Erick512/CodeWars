/*
Complete the function that takes two integers (a, b, where a < b) 
and return an array of all integers between the input parameters, including them.
*/

function between(a ,b) {
    return [...Array(b - a + 1).keys()].map((x, i) => x = a + i)
}

// tets

console.log(between(5, 10))
console.log(between(1, 4))