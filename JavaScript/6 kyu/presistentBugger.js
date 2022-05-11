function presistence(num){

    if(num < 10) return 0

    let i = 0

    while(num.toString().length > 1){
        num = num.toString().split('').reduce((a, b) => a * b)
        console.log(num)
        i++
    }
    return i
    
}

console.log(presistence(999))