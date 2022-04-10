/*
Write a function that returns a string in which firstname is swapped with last name.
*/

function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ')
  }

// Test sample

  console.log(nameShuffler('mclane john'))