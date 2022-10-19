const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft
}

console.log(zeroFuel(50, 25, 2))
console.log(zeroFuel(100, 50, 1))
console.log(zeroFuel(60, 30, 3))