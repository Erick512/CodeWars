/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

*/

function multipleOfIndex(array) {
    
    return array.filter((num, index) => num % index == 0 )
}

//tests

console.log(multipleOfIndex([1,6,9,9,3,5,7,8]))