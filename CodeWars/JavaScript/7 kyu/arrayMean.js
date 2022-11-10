// Find the mean (average) of a list of numbers in an array


var findAverage = function (nums) {
    return nums.reduce((a, b) => a + b)/nums.length
}

// tetsts

console.log(findAverage([1,3,5,7]))