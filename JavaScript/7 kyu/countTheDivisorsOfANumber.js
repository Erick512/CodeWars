/*

*/

function getDivisorsCnt(n){
    let cnt = 0
    for(let i = 1; i <= n; i++){
        console.log(i)
        if((n/i) % 1 == 0) {cnt++}
    }
    return cnt
}

// tests

console.log(getDivisorsCnt(11))