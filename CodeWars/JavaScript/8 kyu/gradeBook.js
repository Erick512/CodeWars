function getGrade (s1, s2, s3) {
    
    let score = (s1 + s2 + s3)/3

    switch(true) {
        case score >= 90 && score <= 100: 
            return 'A'
        case score >= 80 && score < 90: 
            return 'B'
        case score >= 70 && score < 80: 
            return 'C'
        case score >= 60 && score < 70: 
            return 'D'
       case score >=  0 && score < 60: 
        return 'F'
    }
}

// test

console.log(getGrade(95, 90, 93))
console.log(getGrade(89, 89, 90))