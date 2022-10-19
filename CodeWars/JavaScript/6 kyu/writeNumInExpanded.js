/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/

function expandedForm(num) {
    return num
    .toString()
    .split('')
    .map((x, i) => x > 0 ? x += '0'
        .repeat(String(num).length - 1 - i) : '')
    .filter(x => x != 0).join(' + ')
  }

  // Sample test

  console.log(expandedForm(20))
  console.log(expandedForm(70304))
  console.log(expandedForm(724156))
  console.log(expandedForm(72))