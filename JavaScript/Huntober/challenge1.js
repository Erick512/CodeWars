const keys = {
    '0': 'O',
    '5': 'S',
    '1': 'I',
    '6': 'G',
    '2': 'Z',
    '7': 'L',
    '3': 'E',
    '8': 'B',
    '4': 'h',
    '9': 'q',
}


// function that gets key based on value from an object
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// converts a message based on the keys object value and pair. use first order function sice higher order functions cant have spaces in id.
function decrypt(code) {

    let arr =  Array.from(code)

    for(let i = 0; i < arr.length; i++) {

        if(Number(arr[i]) || arr[i] == 0){
            arr[i] = keys[arr[i]]
        } else {
            arr[i] = getKeyByValue(keys, arr[i]) || arr[i]
        }

        if(arr[i] === undefined) {
            arr[i] = ' '
        }
    }

    return arr.join('')
}

console.log(decrypt("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))