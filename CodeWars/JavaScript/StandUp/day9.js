// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" 
// if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//parameters: a string

//return: '(' for every unique letter and ')' for every duplicate letter

// example: 'din' => '((('

function stringPar(str) {

    let obj = {}

    // expensive
    // return str.toLowerCase().split('').map(char => 
    //     (str.indexOf(char) === str.lastIndexOf(char) ?
    //         '(' :
    //         ')'
    //     )).join('')

    str.split('').forEach(char => {
        obj[char] ? 'hi' : obj[char] = 0
    })

    return obj
}

console.log(stringPar('din'), '(((')
console.log(stringPar('recede'), '()()()')
console.log(stringPar('Success'), ')())())')
console.log(stringPar('(( @'), '))((')