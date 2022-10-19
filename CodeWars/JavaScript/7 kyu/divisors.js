/*
Create a function named divisors/Divisors that takes an integer n > 1 
and returns an array with all of the integer's divisors(except for 1 and the number itself), 
from smallest to largest. 
If the number is prime return the string '(integer) is prime'
*/

function divisors(integer) {
    let arr = []
    for(let i = 2; i < integer; i ++) {
        if(integer % i == 0) {arr.push(i)}
    }
    return arr.length > 0 ? arr : `${integer} is prime`
}

console.log(divisors(12))
console.log(divisors(15))
console.log(divisors(13))
