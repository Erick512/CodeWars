// Description

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.



// Parameters: two sorted arrays

// Returns: one array including both arrays in an ascending order

// Example: [1,2,7] [3,4,10] => [1,2,3,4,7,10]

// Code

function mergeArrays(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2].sort((a, b) => a - b)))
}

// Tests

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))