function defineSuit(card) {
    switch(card[card.length - 1]) {
        case '♣':
            return 'clulbs'
        case '♦':
            return 'diamonds'
        case '♥':
            return 'hearts'
        case '♠':
            return 'spades'
    }
}

console.log(defineSuit('3♠'))