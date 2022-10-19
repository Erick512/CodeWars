let myArray = ['xyz', 'abc', 1, 2, 'Hey!']

function moveLeft(str, arr) {
    let index = arr.indexOf(str)
    if(arr[index - 1]) {
        let temp = arr[index - 1]
        arr[index - 1] = str
        arr[index] = temp
    }
    return arr
}

function moveRight(str, arr) {
    let index = arr.indexOf(str)
    if(arr[index + 1]) {
        let temp = arr[index + 1]
        arr[index + 1] = str
        arr[index] = temp
    }
    return arr
}

console.log(moveLeft('xyz', myArray))
console.log(moveRight(2, myArray))

// call move left function with 'xyz' and myArray as arguments
// console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change
