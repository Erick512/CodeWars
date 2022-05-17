/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

function moveZeros(arr) {
    let filtered = arr.filter(x => x !== 0)
    let zerosToAdd = arr.length - filtered.length

    return filtered.concat([...Array(zerosToAdd).keys()].map(x=> 0))
}

// cases

console.log(moveZeros([1,1,1,1,0,true,3,0,null,5,0,3]))