function longestConsec(strarr, k) {
    if(strarr.length == 0 || k > strarr.length || k <= 0){
        return ''
    }
    strarr.sort((a, b) => a.length - b.length)
    let str = ''
    for(let i = (strarr.length - 1), x = 0; x < k; x ++, i--){
        console.log(strarr[i])
        str += strarr[i]
    }

    return str
}

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 2))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))