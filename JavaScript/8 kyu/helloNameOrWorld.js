/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! 
if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
*/

function hello(name) {
    return name ? `Hello, ${name.split('').map((x, i) =>{
        if(i == 0){
            return x.toUpperCase()
        } else {return x.toLowerCase()}
    }).join('')}!` : 'Hell0, World!'
}

// examples

console.log(hello('erick'))
console.log(hello(''))