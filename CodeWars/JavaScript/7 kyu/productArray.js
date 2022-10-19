// Parameters: array of integers

// Returns: each element will be the product of every element except itself

// Example: [1,2,3] => [6, 3, 2]

/* Pseudo Code: 

function that takes in an array of integers

loop over the array twice, second loop will get the index of the current integer in the first loop, 
skip it and get product of the rest of the loop

return the new array

*/

// Code

function productArray(numbers) {
    let numbersCopy = [...numbers]
    for(let i = 0; i < numbers.length; i++) {
        let product = 1
        numbers.forEach((x, index) => {
            if(index !== i){
                product *= x
            }
        })
        numbersCopy[i] = product
        product = 1
    }

    return numbersCopy
}

// Tests

console.log(productArray([1,2,3])) // => [6, 3, 2]