/*
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, 
you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, 
which changes all but the last four characters into '#'.

*/

function maskify(cc) {

    return [...cc].map((x, i) => {
        return i < (cc.length - 4) ? '#' : x
    }).join('')
}

// tests

console.log(maskify('123456'))
console.log(maskify('123456234124'))
console.log(maskify('dgahdas'))