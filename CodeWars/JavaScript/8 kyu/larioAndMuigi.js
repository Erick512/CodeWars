function pipeFix(numbers){
    let arr = []
    for(let i = numbers[0]; i <= numbers[numbers.length - 1] ; i++) {
        arr.push(i)
    }
    return arr
}

console.log(pipeFix([3,5,7,8]))
console.log(pipeFix([-5,7,12]))
console.log(pipeFix([-1,4]))