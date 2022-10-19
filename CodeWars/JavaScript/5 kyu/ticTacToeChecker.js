/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, 
wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 
1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
*/

function isSolved(board) {

    let gameStatus

    // horizontal
    board.forEach(x => {
        if(x.join('') == '111'){
            gameStatus = 1
        }
        if(x.join('') == '222'){
            gameStatus = 2
        }
    })

    // vertical
    board.forEach((_, i) =>{
        if(board[0][i].toString() +
           board[1][i].toString() +
           board[2][i].toString() == '111'
        ){
            gameStatus = 1

        } else if(board[0][i].toString() +
                  board[1][i].toString() +
                  board[2][i].toString() == '222'
        ){
            gameStatus = 2
        }
    })

    //diagnol
    board[0][0].toString() +
    board[1][1].toString() +
    board[2][2].toString() == '111' ? gameStatus = 1 : 2

    board[0][2].toString() +
    board[1][1].toString() +
    board[2][0].toString() == '111' ? gameStatus = 1 : 2


    return gameStatus ? gameStatus : board.map(x => x.join('')).join('').includes('0') ? -1 : 0

}

// case

console.log(isSolved([[1,2,1],
                      [1,1,2],
                      [2,1,2]]))