/*
You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, 
you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

function rentalCarCost(d) {
    return d < 3 ? 40 * d: d < 7 ? d * 40 - 20 : d * 40 - 50
}

// Sample tests

console.log(rentalCarCost(1))
console.log(rentalCarCost(3))
console.log(rentalCarCost(4))
console.log(rentalCarCost(10))