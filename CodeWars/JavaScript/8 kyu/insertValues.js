function invert(array) {
    return array.map((x, i) => -(x))
}

console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,-3,4,-5]))