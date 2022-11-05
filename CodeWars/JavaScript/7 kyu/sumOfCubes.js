function sumCubes(n){
    
    return [...Array(n).keys()].map((x, i) => Math.pow(i + 1, 3)).reduce((a, b) => a + b, 0)
}

// test

console.log(sumCubes(3))