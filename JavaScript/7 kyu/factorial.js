/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. 
By convention the value of 0! is 1.
*/


function factorial(n){
    if(n < 0 || n > 12)
        throw new RangeError()
    return n <= 1 ? 1 : n * factorial(n - 1)
}

// test samples

console.log(factorial(13))
console.log(factorial(19))
console.log(factorial(5))
console.log(factorial(0))