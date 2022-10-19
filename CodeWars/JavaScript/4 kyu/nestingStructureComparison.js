/*
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures 
and same corresponding length of nested arrays as the first array.
*/

Array.prototype.sameStructureAs = function (other) {


    const isIterable = (value) => {
        return Symbol.iterator in Object(value);
    }

    if(isIterable(this) != isIterable(other)) {return false}

    for(let i = 0; i < this.length; i++){
        if(
            typeof(this[i]) == typeof(other[i]) &&
            this[i].toString().length == other[i].toString().length ||
            typeof(this[i]) == 'number' && typeof(other[i]) == 'string' ||
            typeof(this[i]) == 'string' && typeof(other[i]) == 'number'
        
        ){
        } else {
            return false
        }
    }
    return true
}

// examples

console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ))
console.log(( [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ) ))
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ))
console.log([1,[1,1]].sameStructureAs([2,[2]]))
console.log([].sameStructureAs({}))
console.log([1,'[',']'].sameStructureAs(['[',']',1]))