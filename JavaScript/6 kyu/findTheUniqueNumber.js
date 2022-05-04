/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr){
    let sorted = arr.sort((a, b) => a-b)

    return sorted[0] == sorted[1] ? sorted[sorted.length - 1] : sorted[0]
}

// Sample tests

console.log(findUniq([ 3, 10, 3, 3, 3 ]))
console.log(findUniq([ 1,0,0 ]))
console.log(findUniq([ 0,1,0 ]))
console.log(findUniq([ 0,0,1 ]))