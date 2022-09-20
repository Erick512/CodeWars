/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/


function adjacentElementsProduct(array) {
    
    let max = array[0] * array[1]

    for(let i = 0; i < array.length ; i++){
        if(array[i] * array[i + 1] >= max) {max = array[i] * array[i + 1]}
    }
    
    return max
}

// tests

console.log(adjacentElementsProduct([1,2,3,4,5,6,7,8,9]))