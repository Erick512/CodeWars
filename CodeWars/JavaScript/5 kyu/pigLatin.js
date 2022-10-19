/*
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str){

    return str.split(' ').map(x => {

        if(x == '!' || x == '?' || x == '.') {return x}

        x = x.split('')
        let letter = x.shift()
        x.push(letter + 'ay')
        x = x.join('')
        return x

   }).join(' ')
}

// example

console.log(pigIt('Pig latin is so cool !'))  // igPay atinlay siay oolcay