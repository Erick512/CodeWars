/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
    
    let filteredToEven = integers.filter(x => x % 2 == 0)

    return filteredToEven.length == 1 ? filteredToEven[0] : integers.filter(x => x % 2 != 0)[0]
}

// cases

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))