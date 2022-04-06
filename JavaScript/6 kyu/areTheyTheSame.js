/*
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 
It gets obvious if we write b's elements in terms of squares:
*/

function comp(array1, array2){
  
    if(array1 == null || array2 == null) {
      return false
    }
  
    let sqauredArr =  array1.sort((a, b) => +a - b).map(x => x * x).join('')
    let squaredArr2 = array2.sort((a, b) => +a - b).join('')
    return sqauredArr == squaredArr2
}

// Sample test

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))