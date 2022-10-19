function rot13(message){
    return message.split('').map((x, i) => x.charCodeAt(0)) > 77
}

// .fromcharcode()

console.log(rot13('dsf'))