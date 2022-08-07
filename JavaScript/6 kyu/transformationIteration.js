// Parameters: Two Strings, same length

// Returns: array of transformation from string 1 to string 2

// Example: (car, see) => [sar, ser, see]

/* Pseudo Code: 

function that takes in two string
iterate over first string replace each element , with the same index element form the second string 
convert into array
return array

*/


// Code

function transform(source, traget) {
    let arr = []
    sourceCopy = source.split('')

    for(let i = 0; i < source.length; i++) {
        sourceCopy[i] = traget[i]
        console.log(sourceCopy)
        arr.push(sourceCopy)
    }

    return arr.map(x => x.join(''))

}

// Tests

console.log(transform('car', 'see'))