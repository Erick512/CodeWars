var findAverage = function (nums) {
    return nums.reduce((a, b) => a + b)/nums.length
}

console.log(findAverage([1,3,5,7]))