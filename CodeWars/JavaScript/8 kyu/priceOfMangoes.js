// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
// For a given quantity and price (per mango)
// calculate the total cost of the mangoes.

function mango(quantity, price){

    let mangoes = quantity/3 >= 1 ? Math.floor(quantity/3) : 1

    return mangoes * (price*2)
}

console.log(mango(2, 3))
console.log(mango(3, 3))
console.log(mango(5, 3))
console.log(mango(9, 5))
console.log(mango(55, 39))
console.log(mango(1, 1))
console.log(mango(91, 1))

// 3,3, 6
// 9,5 30