/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(n){
    return +n.toString().split('').sort((a, b) => b - a).join('')
  }

  // Sample tests
  
  console.log(descendingOrder(3523426345769))