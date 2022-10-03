function array(arr){
    let array = arr.split(',')
    array.shift()
    array.pop()
    return array.join(' ') || null
}

console.log(array('1,2,3,4'))
console.log(array(''))