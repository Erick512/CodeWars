function isMerge(s, part1, part2) {
    // return part1.split('').concat(part2.split('')).sort().join('') == s.split('').sort().join('')
    return part1.split('').concat(part2.split('')).join('') == s
  }

  console.log(isMerge('codewars', 'code', 'wars'))
  console.log(isMerge('codewars', 'cdwr', 'oeas'))