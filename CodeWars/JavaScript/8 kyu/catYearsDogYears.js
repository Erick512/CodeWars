/*
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years

15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years

15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let cat = humanYears => {
        if(humanYears == 1) {
            return 15
        } else if(humanYears == 2) {
            return 24
        } else {
            return 24 + (4 * (humanYears - 2))
        }
    }
    let dog = humanYears => {
        if(humanYears == 1) {
            return 15
        } else if(humanYears == 2) {
            return 24
        } else {
            return 24 + (5 * (humanYears - 2))
        }
    }
    return [humanYears, cat(humanYears), dog(humanYears)];
  }
  
// Sample tests

console.log(humanYearsCatYearsDogYears(2))
console.log(humanYearsCatYearsDogYears(10))
