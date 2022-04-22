/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

*/


function buildTower(n) {

    let building = []

    for(let i = 1, x = 1; i <= n; i++, x += 2) {
        building.push(`${' '.repeat(n - i)}${'*'.repeat(x)}${' '.repeat(n - i)}${i != n ? '\n' : ''}`)
    }

    return building.join('')
}

console.log(buildTower(3))