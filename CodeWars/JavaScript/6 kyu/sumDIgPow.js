/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 
What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.
*/

function sumDigPow(a, b) {
    
    let arr = []

    for(let i = a; i < b ; i ++){
        if(checkForPow(i)) {arr.push(i)}
    }

    function checkForPow(x) {
        return x.toString()
            .split('')
            .reduce((a, b, i) => +a + Math.pow(+b, i + 1), 0) == x
    }

    switch (arr.length){
        case 0:
            return []
        case 1:
            return [arr[0]]
        case 2:
            return [arr[0], arr[arr.length - 1]]
        default:
            return arr
    }
}  

// Sample tests

console.log(sumDigPow(10, 15))
console.log(sumDigPow(1, 15))
console.log(sumDigPow(10, 150))
console.log(sumDigPow(100, 1500))