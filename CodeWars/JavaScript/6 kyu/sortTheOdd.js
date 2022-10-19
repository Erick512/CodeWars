/*
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

// parameter: unsorted array of integers

// return: array with odd integers sorted leaving even integers in the same position

// example: [5,3,2,8,1,4] => [1,3,2,8,5,4]

// code

function sortArray(array) {

    let odd = array.filter(x => x % 2 ).sort((a, b) => a - b).reverse()
   
    return array.map(x => x % 2 ? odd.pop() :  x)
}

// tests

console.log(sortArray([5, 3, 2, 8, 1, 4]))