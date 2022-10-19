function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
    
    let last = array.length-1;
  
    for (let i = last; i >= 0; i--){
      
      if (array[i] === 0 || array[i] === '0'){
        
        for (let x = i; x < last; x++){
          
          if (array[x+1] === 0 || array[x+1] === '0' || x == last ){
            break;
          } else {
            [array[x+1],array[x]] = [array[x],array[x+1]];
          }
        }
      }
    }
    return array;
}

  // example 

//   console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))
// //   // return [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

//   console.log(removeZeros([ 1, null, '5', '0', '2', 0, 8, 6, null, false ]))
// //   // return [1,null,"5","2",8,6,null,false,"0",0]

//   console.log(removeZeros([ '0', '0', '0', 0, 1  ]))
// //   // return [1,'0','0','0', 0]

// console.log(removeZeros([ 1, '0', 2, 0, 52, '0', 7, 0, '3', 1 ]))

console.log(removeZeros([ 1, '0', 2, 0, 52, '0', 7, 0, '3', 1 ]))
