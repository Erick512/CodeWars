/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
*/


function inArray(array1, array2) {
    let arr = []
    for(let i = 0; i < array1.length ; i++){
        for(let x = 0; x < array2.length; x++){
            if(array2[x].includes(array1[i])){
                arr.push(array1[i])
                break
            }
        }
    }
    return arr.sort()
}

// cases

console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(['arp', 'live', 'strong'], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(['live', 'strong', 'arp'], ["lively", "alive", "harp", "sharp", "armstrong"]))