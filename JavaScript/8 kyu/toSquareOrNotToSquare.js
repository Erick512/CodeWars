/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
*/

function squareOrSquareRoot(array) {
   return array.map(x => Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : x**2)
  }

  // Sample test

  console.log(squareOrSquareRoot([2,4,9,7]))