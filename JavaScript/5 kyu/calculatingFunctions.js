function zero() {return 
    plus()
}
function one() {return }
function two() {return 2}
function three() {return 3}
function four() {return 4}
function five() {return 5}
function six() {return 6}
function seven() {return 7}
function eight() {return 8}
function nine() {return 9}

function plus(n, f) {return n + f()}
// function minus(n) {return n - }
// function times(n) {return n * function()}
// function dividedBy(n) {return n / function()}

console.log(one(plus(zero())))