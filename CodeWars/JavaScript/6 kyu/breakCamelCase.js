/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

function solution(string) {
    let copy = string.split('')
    for(let i = 0; i < string.length; i++){
        if(copy[i].toLowerCase() != copy[i]){
            copy.splice(i, 0, ' ')
            i += 1
        }
    }

    return copy.join('')
}

// tests

console.log(solution('camelCasing'))