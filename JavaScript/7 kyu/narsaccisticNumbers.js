/*
A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. 
If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

*/

function isNarcissistic(n){
   return n === n.toString().split('').reduce((res , num, index , arr) => res += Math.pow(num , arr.length), 0)
  }


// Sample test

  console.log(isNarcissistic(153))
  console.log(isNarcissistic(163))