/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.
*/

function removeEveryOther(arr){
    //your code here

    return arr.filter((x, i) => i % 2 == 0)
  }

//Sample test

  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))