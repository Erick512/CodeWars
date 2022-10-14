/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

function printArray(array){
    return array.join(',')
}

// tests

console.log(printArray(['h', 'e', 'l', 'l', 'o']))