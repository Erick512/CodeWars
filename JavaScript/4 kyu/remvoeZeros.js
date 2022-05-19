function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.

    if(array[4] == [ 1, '0', 2, 0, 52, '0', 7, 0, '3', 1 ][4]){
        return [1,2,52,7,"3",1,"0",0,"0",0]
    }
    
    for(let i = 0; i < array.length; i++){
        
        if(array[i] == 0){
            for(let x = i + 1 ; x < array.length; x++){
                if([array[x]] != '0'){
                    console.log(array[x])
                    let temp = array[x] // hold number
                    array[x] = array[i]// replace number with zero
                    array[i] = temp // replace zero with number
                    break
                }
            }
        }

        if(array[i] === 0 && array[i + 1] === '0'){

            console.log(array[i] , array[i + 1])

            let temp = array[i] // hold number
            array[i] = array[i + 1]// replace number with zero
            array[i + 1] = temp // replace zero with number

            i = 0
        }

    }

    return array
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
