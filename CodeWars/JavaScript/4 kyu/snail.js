/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/

// PREP
// P: [[], [], []] 2D array
// R: [n...] 

snail = function(array) {

    //create arrary to store values
    let arr = []

    while(array.length > 0){
    top()
    right()
    bottom()
    left()
    next()
    }

    function top(){
        array[0].forEach(x => {
           arr.push(x)
        }) 
    }

    function right(){
        array.forEach((x, i) => {
            if(i != 0){
                arr.push(x[x.length - 1])
            }
        })
    }

    function bottom(){
        array[array.length - 1].reverse().forEach((x, i, currArr) => {
            if( i != 0){
                arr.push(x)
            }
        })
        array[array.length - 1].reverse()
    }

    function left(){
        let temp = []
        array.forEach((x, i) => {
            temp.push(x[0])
        })
        temp.shift()
        temp.pop()
        arr = arr.concat(temp.reverse())
    }

    function next(){
        //remove top
        array.shift()

        //remove right
        array.forEach(x => {
            x.splice(x.length - 1, 1)
        })

        // remove bottom 
        array.splice(array.length - 1, 1)

        // remove left
        array.forEach(x => {
            x.splice(0, 1)
        })
    }

    return arr[0] ? arr : []
}

// example

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) 
// return [1,2,3,6,9,8,7,4,5]

console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
// return [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

console.log(snail([[1]]))
// return [1]

console.log(snail([[]]))
// return []

console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))
// return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])

console.log(snail([
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
]))
