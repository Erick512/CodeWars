/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
    return  Array.from(new Set(s1.split('').concat(s2.split('')).sort())).join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
console.log(longest("inmanylanguages", "theresapairoffunctions"))