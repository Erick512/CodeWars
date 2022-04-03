/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James.
 Since James doesn't know how to make this happen, he needs your help.

Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative,
as it is not possible to print a diamond of even or negative size.
*/

function diamond(n){

    let arr = []
    let str = ""
  
    if(n < 0 || n % 2 == 0) {
        return null
    }

    for(let i = 1; i <=  n ; i ++){
        arr.push(i)
    }

    let oddArr = arr.filter(x => x % 2 != 0)
    let copy = arr.filter(x => x % 2 != 0)
    copy.reverse().shift()
    let testArr = oddArr.concat(copy)

    testArr.forEach((x, i) => {
            let spaces = " "
            let diam = "*"
            str += `${spaces.repeat(i > testArr.length/2 ? i - Math.floor(testArr.length/2) : Math.floor((testArr.length / 2) - i) )}${diam.repeat(x)}\n`
    })

    return str
  }

// Sample Test

console.log((diamond(1), "*\n"))
console.log((diamond(3), " *\n***\n *\n"))
console.log((diamond(5), "  *\n ***\n*****\n ***\n  *\n"))
console.log((diamond(2), null))
console.log((diamond(-3), null))
console.log((diamond(0), null))