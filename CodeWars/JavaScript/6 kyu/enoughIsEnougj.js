/*
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

function deleteNth(arr,n){
    element = {}

    return arr.filter(x => {
        element[x] = (element[x] || 0) + 1;
        return element[x] <= n
    })
}

// Sample tests

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([20,37,20,21], 1)) // [20, 37, 21]
console.log(deleteNth([12, 43, 12, 43, 42, 41, 28, 12, 42, 27, 28, 41, 12, 12, 43, 28, 43, 42, 41, 27, 43, 27, 41, 28, 28, 12, 41, 42, 33, 43, 42, 33, 27, 12, 42, 33], 2))
// [12, 43, 12, 43, 42, 41, 28, 42, 27, 28, 41, 27, 33, 33]