function sumDigPow(a, b) {
    // return [...Array(b).keys()]
    // .map((_, i) => i + 1)
    // .filter((x, i) => 
    //     x.toString()
    //     .split('')
    //     .reduce((a, b, i) => +a + Math.pow(+b, i + 1), 0) === x && x > a - 1)

    for(let i = a;  i < b && checkForPow(i); i ++){
        console.log(i)
    }

    function checkForPow(x) {
        return x.toString()
            .split('')
            .reduce((a, b, i) => +a + Math.pow(+b, i + 1), 0) == x
    }
}  

console.log(sumDigPow(10, 150))