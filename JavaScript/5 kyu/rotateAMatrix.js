// Description 

// Write a rotate function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

// The function accepts two parameters: an array, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".

// Here is an example of how your function will be used:

// var matrix = [[1, 2, 3],
//               [4, 5, 6],
//               [7, 8, 9]];

// [1,2,3,4,5,6,7,8,9] => [7,4,1,8,5,2,9,6,3]

// rotate(matrix, "clockwise"); // Would return  [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]
// To help you visualize the rotated matrix, here it is formatted as a grid:

//  [[7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]]
// Rotated counter-clockwise it would looks like this:

//  [[3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7]]

// [1,2,3,4,5,6,7,8,9] => [3,6,9,2,5,8,1,4,7]

// Parameters: an array, and a string specifiyng direction of rotation

//return: the array totated according to the string in a clock manner

// code

function rotate(matrix, direction) {
    let newArry = [[],[],[]]
    if(direction === 'clockwise') {
        matrix.forEach(array => {
            array.forEach((number, i) => {
                    newArry[i] = [number, ...newArry[i]] 
            })
        })
    } else if(direction === 'counter-clockwise') {
        matrix.forEach(array => {
            array.forEach((number, i) => {
                    newArry[i] = [...newArry[i], number] 
            })
        })
        newArry.reverse()
    }

    return newArry.filter( arr => arr.length )
}

// tests

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]], 'clockwise'))
console.log(rotate([[1],[4],[7]], 'clockwise'))
console.log(rotate([[1]], 'clockwise'))
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]], 'counter-clockwise'))