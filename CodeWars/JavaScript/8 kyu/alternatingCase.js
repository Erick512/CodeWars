String.prototype.toAlternatingCase = function () {
    
    return this.split('').map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')

}

console.log('HeLLo'.toAlternatingCase())