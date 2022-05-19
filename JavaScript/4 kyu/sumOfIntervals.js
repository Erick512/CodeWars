// NOT FINISHED

function sumIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0])

    for(let first = 0; first < intervals.length; first++){

        if( intervals[first + 1] &&
            intervals[first][0] <= intervals[first + 1][0] && 
            intervals[first][1] >= intervals[first + 1][0]
        ) {
            intervals[first + 1][0] = intervals[first][0]

            if(intervals[first + 1][1] >= intervals[first][1]){
            intervals[first + 1][1] = intervals[first + 1][1]
            } else {
            intervals[first + 1][1] = intervals[first][1]
            }
            intervals.shift()
            first--
        }
    }

    console.log(intervals)

    return isNaN(intervals[0]) 
    ? 
         intervals.reduce((a, b) => a + b.reduce((a, b) => b - +a), 0) 
    : 
        intervals[0] > 0
        ? intervals.reduce((a, b) => b - a, 1)
        : intervals.reduce((a, b) => b - a, 1)
}

// console.log(sumIntervals([[1,4],[7, 10],[3, 5]])) // 7
console.log(sumIntervals([[1,5],[1,5],[1,5],[1,5]]))
// console.log(sumIntervals([[ 1, 20 ], [ 2, 19 ], [ 5, 15 ], [ 8, 12 ] ]))
// console.log(sumIntervals([[1,5],[6,10]]))
// console.log(sumIntervals([ [ 11, 15 ], [ 6, 10 ], [ 1, 2 ] ]))
// console.log(sumIntervals([ [ 11, 15 ], [ 6, 10 ], [ 20, 20 ] ]))
// console.log(sumIntervals([ [ 1, 4 ], [ 3, 6 ], [ 5, 8 ], [ 7, 10 ], [ 9, 12 ] ]))
// console.log(sumIntervals([[1,5],[10, 20],[1, 6],[16, 19],[5, 11] ]))
// console.log(sumIntervals([ [ 5, 12 ], [ -14, -11 ], [ -4, 19 ] ])) // 26
// console.log(sumIntervals([ [ 2, 3 ], [ 2, 6 ], [ 2, 4 ], [ 2, 9 ], [ 2, 5 ] ])) // 7
// console.log(sumIntervals([ [ -20, 6 ], [ -14, 2 ], [ -3, 2 ], [ 3, 16 ], [ 14, 16 ] ])) // 26
// console.log(sumIntervals([-16, 15], [-16, 15])) // 32
// console.log(sumIntervals([-20, 18], [-20, 18])) // 39
// console.log(sumIntervals([[-19, 19]])) // 39
// console.log(sumIntervals([[ -15, 12 ], [ -3, 5 ],[ -11, -2 ], [ 8, 17 ],[ -19, -8 ], [ -3, 8 ],[ 11, 16 ],  [ -15, -9 ],[ 1, 4 ]])) // 39
// console.log(sumIntervals([
//     [ -19, 5 ],
//     [ -18, -5 ],
//     [ -17, 9 ],
//     [ -14, -13 ],
//     [ -9, 1 ],
//     [ 5, 19 ],
//     [ 7, 11 ],
//     [ 15, 16 ]
//   ]
//   )) // 38

//   console.log(sumIntervals([
//     [ 5, 14 ],
//     [ -12, 17 ],
//     [ -19, 7 ],
//     [ -12, 0 ],
//     [ -18, 11 ],
//     [ -16, -1 ]
//   ]))

console.log(sumIntervals([
    [ -7, 3 ],   [ -17, 5 ],
    [ 14, 17 ],  [ 9, 18 ],
    [ 6, 9 ],    [ -8, 2 ],
    [ 13, 20 ],  [ -20, -19 ],
    [ -15, 16 ]
  ]))