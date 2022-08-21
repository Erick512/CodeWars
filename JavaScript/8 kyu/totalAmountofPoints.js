/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/


function points(game) {
    let points = 0

    game.forEach(el => {

        let x = el.split(':')[0]
        let y = el.split(':')[1]

         x > y ? points += 3 : x == y ? points++ : points += 0
    })

    return points
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))