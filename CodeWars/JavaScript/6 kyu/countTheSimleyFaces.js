/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(x =>
        
        x.length > 3 ? false : x.length == 3 ?
            (x.includes('-') || x.includes('~')) &&
            (x.includes(':') || x.includes(';')) && 
            (x.includes(')') || x.includes('D'))
        :
            (x.includes(':') || x.includes(';')) && 
            (x.includes(')') || x.includes('D'))
    ).length
}


// Sample Tests

console.log(countSmileys([':D',':~)',';~D',':)']))
console.log(countSmileys([':)',':(',':D',':O',':;']))
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
console.log(countSmileys([';oD' , ':)' , ';o>' , ':>' , ';(' , ';)' , ':>']))