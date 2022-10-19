// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

// checkEquality(arr1, arr2) => true
// checkEquality(arr1, arr3) => false
// checkEquality(arr1, arr4) => false
// etc.


function compArr(arr1, arr2) {
    let same = false
    arr1.forEach((sub, i) => {
        same = sub.join('') == arr2[i].join('')
    })
    return same
}

console.log(compArr(arr1, arr2))
console.log(compArr(arr1, arr3))