/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.
*/

function solution(input, markers) {

    let arr = input.split('\n')
    let strArr = arr.map(x => x.split(' '))

    console.log(strArr)

    strArr.forEach((str) => {

        str.forEach((word, wordIndex) => {

            markers.forEach( marker =>{

                if(word.includes(marker)){
                    str.splice(wordIndex)
                }
            })

        })
    })

    return strArr.map(x => x.join(' ')).join('\n')
}

// examples

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))