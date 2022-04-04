/*
According to Sheldon Cooper the following is true:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
( and as it always has ) Rock crushes Scissors
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".
*/

function rpsls(pl1,pl2){
    //Your Magnificent Code here
      
      if(pl1 == 'rock' && pl2 == 'lizard' || pl1 == 'rock' && pl2 == 'scissors' || pl1 == 'paper' && pl2 == 'rock' || pl1 == 'paper' && pl2 == 'spock' || pl1 == 'scissors' && pl2 == 'paper' || pl1 == 'scissors' && pl2 == 'lizard' || pl1 == 'lizard' && pl2 == 'paper' || pl1 == 'lizard' && pl2 == 'spock' || pl1 == 'spock' && pl2 == 'rock' || pl1 == 'spock' && pl2 == 'scissors'){
            return 'Player 1 Won!'
         } else if(pl1 == pl2) {
           return 'Draw!'
         }else {
        return 'Player 2 Won!'
      }
    
    }

// Sample Tests

console.log(rpsls('rock', 'lizard'))