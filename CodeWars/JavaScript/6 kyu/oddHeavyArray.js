/*
An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

eg.

Array [11,4,9,2,8] is odd-heavy 
because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy
because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.
*/


function isOddHeavy(n){
    let odd = n.filter(x => x % 2 != 0).sort((a, b) => a-b, 0)
    let even = n.filter(x => x % 2 == 0).sort((a, b) => a-b, 0)
    if(odd.length == 0 && even.length == 0) return false

    console.log(`odd: ${odd[0]} even: ${even[even.length - 1]}`)
    return even.length > 0 ? odd[0] > even[even.length - 1] : true
}

// Sample tests

console.log(isOddHeavy([1,-2,-1,2]))
console.log(isOddHeavy([0,2,19,4,4]))
console.log(isOddHeavy([6, 2, 4, 2, 2, 2, 1, 5, 0, 0, -12, 13, -5, 4, 1]))
console.log(isOddHeavy([3,2,1,0]))
console.log(isOddHeavy([1, -1, 3, -1]))
console.log(isOddHeavy([]))