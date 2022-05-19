/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
   str = str.split('')
   str.forEach((x, i, arr) => {
        if(arr[i + 1] && x == '-' || x == '_'){
            str[i + 1] = str[i + 1].toUpperCase()
            str.splice(i, 1)
        }
    })

    return str.join('')
}

// examples

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))