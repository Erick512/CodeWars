function reverseLetter(str) {
    return str.split('').filter(x => x.toLowerCase() != x.toUpperCase()).reverse().join('')
}

console.log(reverseLetter('23!@4lkj'))