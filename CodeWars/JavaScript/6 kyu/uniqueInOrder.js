/*
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other and 
preserving the original order of elements.
*/

var uniqueInOrder=function(iterable){

    // if(typeof(iterable) == 'string'){
    //    iterable = iterable.split('')
    // }

    // let count = 0
    // for(let i = 0; i < iterable.length; i++) {
    //     for(let x = i; x < iterable.length; x++) {

    //         if(iterable[i] != iterable[x]) {
    //             break
    //         }
    //         if(iterable[i] === iterable[x]) {
    //             count++
    //         }
    //     }

    //     iterable.splice(i, count - 1)
    //     count = 0
    // }
    
    // return iterable

    return [...iterable].filter((x, i) => {
        console.log(x, iterable[i - 1])
        x !== iterable[i - 1]})
}

// Sample tests

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('AA'))
console.log(uniqueInOrder([1,2,2,3,3]))