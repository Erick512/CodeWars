/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString (strng) {
    let str = strng.split('')

    if(str.filter(x => !isNaN(x)).length < 1){
        str.push('1')
        return str.join('')
    }

    let nums = +str.filter(x => !isNaN(x)).join('') + 1
    nums = nums.toString().split('')
    nums.unshift('0'.repeat(str.filter(x => !isNaN(x)).length - nums.length > 0 ? str.filter(x => !isNaN(x)).length - nums.length : 0))

    return str.slice(0, str.findIndex(v => !isNaN(v))).concat(nums).join('')
}

// Sample tests

console.log(incrementString('foobar000')) // foobar 001
console.log(incrementString('foo'))       // foo1
console.log(incrementString('foo99'))     // foo100
console.log(incrementString('foo099'))    // foo100
console.log(incrementString('foo01'))    // foo02