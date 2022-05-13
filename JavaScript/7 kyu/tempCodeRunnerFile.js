function factorial(n){
    if(n < 0 || n > 12){
        return [...Array(n).keys()].map(x => i + 1).reduce((a, b) => a * b)
    } else {
        throw RangeError
    }
}

console.log(factorial(3))