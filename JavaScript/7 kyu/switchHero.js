/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched.
*/

function switcheroo(x){
    return [...x].map(x => {
        switch(x){
            case 'a':
                return 'b'
            case 'b':
                return 'a'
            default:
                return x
        }
    }).join('')
}

// tests

console.log(switcheroo('abcd'))
console.log(switcheroo('aabbbccdddd'))