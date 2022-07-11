/*
Remove an exclamation mark from the end of a string. 
For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/

function remove(string) {
    let string1 = string.split('')
    if(string1[string.length - 1] == '!'){
        string1.pop()
    }
    return string1.join("")
}

// tests

console.log(remove("!!Hi!"))