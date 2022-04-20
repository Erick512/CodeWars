/*
Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them.
*/

var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
   return  this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
  }

// Sample Tests
  console.log(str.toJadenCase())