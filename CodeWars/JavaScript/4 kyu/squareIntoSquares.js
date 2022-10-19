// PREP
// P: n = postive, integral
// R: array with increasing sequence, where sums of elements squared = n squared

function decompose(n) {
    let nSqaured = n * n

    let arr = []

    while(n > 0){
        let toSquared = n * n

        if(nSqaured > toSquared && n){
            // console.log('yes')
            nSqaured -= toSquared
            arr.unshift(n)
        }
        n--
        // console.log(toSquared, nSqaured, n)
    }

    return arr
}

// example

// console.log(decompose(9))
// console.log(decompose(5)) 
// console.log(decompose(625))
// console.log(decompose(12))
// console.log(decompose(44))
console.log(decompose(50)) // return 1,3,5,8,49
