let myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function movePosition(arr) {
    let containsA = []
    let moreThan2 = []
    let stayInPlace = []

    arr.forEach(word => {
        if(word.includes('a')) {
            containsA = [...containsA, word]
        } else if(word.length > 3) {
            moreThan2 = [...moreThan2, word]
        } else {
            stayInPlace = [...stayInPlace, word]
        }
    })
    
    return [...containsA, ...stayInPlace, ...moreThan2]
}

console.log(movePosition(myArr))