function pipeFix(numbers){
    return [...Array(numbers[numbers.length - 1])].map((_, i) => i + 1)
}

console.log(pipeFix([3,5,7,8]))
console.log(pipeFix([5,7,12]))