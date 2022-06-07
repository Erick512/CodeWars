function countBy(x, b) {
    let arr = []
    for(let i = 1; arr.length < b; i++) {
        if(i % x == 0) {
            arr.push(i)
        }
    }
    return arr
}

console.log(countBy(1, 10))