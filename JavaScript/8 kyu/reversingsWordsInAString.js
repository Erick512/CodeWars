/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
*/

function reverse(string){
    return string.split(' ').reverse().join(' ')
}

// tests

console.log(reverse('hello world'))
console.log(reverse('Hi There.'))