// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {

    let arr = []
    
    for(let i = 1; i <= 10 ; i++){
        arr.push(`${i} * ${number} = ${i*number}`)
    }

    return arr.join('\n')
}

// tests

console.log(multiTable(5))