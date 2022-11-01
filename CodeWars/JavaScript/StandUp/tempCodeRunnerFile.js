return str.toLowerCase().split('').map(char => 
        (str.indexOf(char) === str.lastIndexOf(char) ?
            '(' :
            ')'
        )).join('')