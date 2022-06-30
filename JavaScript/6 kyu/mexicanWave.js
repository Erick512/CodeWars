function wave(str){
    let arr = []
    for(let i = 0; i < str.length; i++) {
        let cap = str[i].toUpperCase()
        if(cap == ' '){ 
           continue
        }
        arr.push(str.slice(0, i) + cap + str.slice(i + 1))
    }
    return arr
}

console.log(wave('hello'))
console.log(wave('codewars'))
console.log(wave('two words'))