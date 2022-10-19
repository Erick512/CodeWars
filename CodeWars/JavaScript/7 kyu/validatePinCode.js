/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pin) {
    if(+pin < 0 || pin % 1 != 0 || pin.includes('\n'))
        return false

    let check = pin.split('').filter(x => !isNaN(x)).length
    
    if(pin.length != check){
      return false
    }
    
    return check == 4 || check == 6
}

// Sample tests

console.log(validatePIN('123\n'))
console.log(validatePIN('-1234'))
console.log(validatePIN('1a2b'))
console.log(validatePIN('123.4'))
console.log(validatePIN('1234'))
console.log(validatePIN('95467'))