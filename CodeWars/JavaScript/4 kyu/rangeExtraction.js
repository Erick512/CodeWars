/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. T
he range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. 
For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
*/

function solution(list) {
    let strArr = []
    for(let x = 0; x < list.length; x++) {

        let tempArr = [list[x]]

        for(let y = x; y < list.length; y++){

            if(list[y] == (list[y + 1] - 1)){
                tempArr.push(list[y+1])
            } else {
                console.log(tempArr)
                if(tempArr.length >= 3){
                    strArr.push(`${tempArr[0]}-${tempArr[tempArr.length - 1]}`)
                } else {
                    strArr = strArr.concat(tempArr)
                }
                x = y
                break
            }
        }
    }

    return strArr.join(',')
}

// Sample tests

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"