/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
    return s.split('!').join('')
  }

  // tests

  console.log(removeExclamationMarks('hello i am erick!!!'))