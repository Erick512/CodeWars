/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

function gimme (triplet) {

    let sorted = Array.from(triplet)
    sorted.sort((a,b) => a - b)

    return triplet.indexOf(sorted[1])
  
}

// sample test

console.log(gimme([1,3,2]))
console.log(gimme(5, 10, 14))