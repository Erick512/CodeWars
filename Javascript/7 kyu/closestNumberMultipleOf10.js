// Given a number return the closest number to it that is divisible by 10.

const closestMultiple10 = num => {
    return Math.round(num/10) * 10
  }

// Sample Test

console.log(closestMultiple10(25))
console.log(closestMultiple10(55))
console.log(closestMultiple10(324))