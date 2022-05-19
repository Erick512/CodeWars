/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) 
letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
*/

function findMissingLetter(array){
    let letter = ''
    array.forEach((char, i, arr) => {
        if(arr[i + 1] && char.charCodeAt(0) + 1 != arr[i + 1].charCodeAt(0)){
            letter = String.fromCharCode(char.charCodeAt(0) + 1)
        }
    })
    return letter
}

// case

console.log(findMissingLetter(['a','b','c','d','f']))