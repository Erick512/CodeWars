/*
Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:
*/

function stickyCalc (operation, val1, val2){
    let stickyNum = Number(Math.round(val1).toString() + Math.round(val2).toString())
    let val2Round = Math.round(val2)

    switch(operation) {
        case '+':
            return stickyNum + val2Round
        case '-':
            return stickyNum - val2Round
        case '*':
            return stickyNum * val2Round
        case '/':
            return stickyNum / val2Round
    }
}

// Sample test

console.log(stickyCalc('*', 5, 5))
console.log(stickyCalc('+', 4.7, 7.2))