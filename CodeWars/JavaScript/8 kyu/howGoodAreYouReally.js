/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
*/

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a+b)/classPoints.length
}
 

// Sample tests
  
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33]))