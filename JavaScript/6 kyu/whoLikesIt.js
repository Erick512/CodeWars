/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
    let str = ''
    for(let i = 0; i < names.length; i++){
        str += `${names[i]} `
    }

    let lastPerson = str.split(' ')[names.length - 1]
    str = str.split(' ').slice(0, names.length - 1).join(' ')
    strTwoNames = str.split(' ').slice(0, 2).join(' ')

    if(names.length == 1){ return str + `${lastPerson} likes this`}
    if(names.length > 3){ return strTwoNames.split(' ').join(', ') + ` and ${names.length - 2 > 0 ? `${names.length - 2} others` : `1 other`} ` + 'like this'}
    return names.length > 0 ? str.split(' ').join(', ') + ` and ${lastPerson} ` + 'like this' : 'no one likes this'
}

// Sample tests

console.log(likes(['Max', 'John', 'Mark', 'Erick']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Max', 'John']))
console.log(likes(['Max']))