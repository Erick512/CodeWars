/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. 
The input numbers are strings and the function must return a string.

Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes

The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b){
    let firstNum = [...a]
    let secondNum = [...b]

    let difference = Math.abs(firstNum.length - secondNum.length)
    let extrZeros = [...Array(difference).keys()].map(x => '0')

    if(firstNum.length > secondNum.length){
        secondNum = extrZeros.concat(secondNum)
    } else {
        firstNum = extrZeros.concat(firstNum)
    }

    let arr = []
    let carry = 0
    
    for(let i = firstNum.length - 1; i >= 0; i--){
        for(let j = i; j >= 0; j--){

            let res =  +firstNum[j] + +secondNum[j] + carry
            res = res.toString().split('')

            if(res.length > 1 && i != 0) {
                arr.unshift(res[1])
                carry = +res[0]
            } else {
                carry = 0
                arr.unshift(res.join(''))
            }
            break
        }
    }
    return arr.join('')
}

// cases

console.log(add('1123', '9459'))
// return "10582"

console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
// return "91002328220491911630239667963"