function solve(arr) {

    return arr.map(innerArr => {
        return Array.from(new Set(innerArr))
    }).reduce((pre, curr) => pre * curr.length, 1)
}


console.log(solve([[1,2], [4], [5,6]])) // => 4
console.log(solve([[1,2], [4,4], [5,6,6]])) // => 4
console.log(solve([[1,2], [3,4], [5,6]])) // => 8
console.log(solve([[1,2,3], [3,4,6,6,7], [8,9,10,12,5,6]])) // => 8