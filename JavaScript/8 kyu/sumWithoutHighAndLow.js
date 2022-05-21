function sumArray(array) {
    let arr = array.sort((a, b) => a-b, 0)
    arr.shift()
    arr.pop()
    return arr.reduce((a, b) => a+b, 0)
}

// example
console.log(sumArray([ 6, 2, 1, 8, 10 ]))