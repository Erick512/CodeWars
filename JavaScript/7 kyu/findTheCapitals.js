var capitals = function(word) {
    let arr = []
    word.split('').forEach((x, i) => {
        if(x === x.toUpperCase())
        arr.push(i)
    })
    return arr
}

console.log(capitals('CodEWaRs'))