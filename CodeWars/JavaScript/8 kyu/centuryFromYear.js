/*
The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.
*/

function century(year) {
    return year % 100 == 0 ? year/100 : Math.ceil(year/100)
  }

// Sample tests

  console.log(century(1701))
  console.log(century(1700))
  console.log(century(1914))
  console.log(century(192359))
  console.log(century(708890))