// Description

/*
Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 3, print out “Fizz”; 
when it’s divisible by 5, print out “Buzz”; 
when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

// Parameters: a real number

// Returns: console log every number up to that number excluding 0. 
// when the integer is divisible by 3, print out “Fizz”; 
// when it’s divisible by 5, print out “Buzz”; 
// when it’s divisible by both 3 and 5, print out “Fizz Buzz”.


// Example: an number of 5 => '1, 2, fizz, 4, buzz'

/* Pseudo Code: 

    run a first order for loop from 1 to n
    if divisible by 3 console log fizz
    if divisible by 5 conosle log buzz
    if divisbible by 3 and 5 log fizz buzz
    else log number

*/


// Code

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0){
            console.log('Fizz Buzz')
        } else if(i % 5 == 0){
            console.log('Buzz')
        } else if (i % 3 == 0){
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}


// Tests

fizzBuzz(15)
fizzBuzz(25)
fizzBuzz(5)