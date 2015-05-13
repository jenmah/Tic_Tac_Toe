var gameboard = ['0','1','2','3','4','5','6','7','8'];
var newGameboard = [];

var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// var winningCombinations = [0, 1, 2];

var moveNumber = 0;

var xPlayerIndex = [];
var yPlayerIndex = [];


$('.button').on('click', getMoves);
function getMoves() {
    if ((moveNumber % 2) === 0) {
      console.log('first player played');
      $(this).html('X');
      currentMoveIndex = parseInt(this.value);
      gameboard[currentMoveIndex] = 'X';
      newGameboard = gameboard;
      xPlayerIndex.push(currentMoveIndex);
        for(var x = 0; x < xPlayerIndex.length; x++) {
          for(var y = 0; y < winningCombinations.length; y++) {
            if(xPlayerIndex.toString() ==  winningCombinations[y].toString()) {
            $('h2').html('PLAYER ONE WON!');
            }
          }
        }
  } else {
      console.log('second player played');
      $(this).html('O');
      currentMoveIndex = parseInt(this.value);
      gameboard[currentMoveIndex] = 'O';
      newGameboard = gameboard;
      yPlayerIndex.push(currentMoveIndex);
        for(var x = 0; x < yPlayerIndex.length; x++) {
          for(var y = 0; y < winningCombinations.length; y++) {
            if(yPlayerIndex.toString() ===  winningCombinations[y].toString()) {
            $('h2').html('PLAYER TWO WON!');
            }
          }
        }
    }
    moveNumber += 1;
} 


$('.refresh-button').on('click', reload);
    function reload() {
      window.location.reload();
  }


// function playToFive() {
//     console.log("Let's play Rock, Paper, Scissors");
//     var playerWins = 0;
//     var computerWins = 0;
    
//     while (playerWins < 5 && computerWins < 5)  {
//     var playerMove = getPlayerMove();
//     var computerMove = getComputerMove();
//     var winner = getWinner(playerMove,computerMove);
    
//     if (winner === 'player') {
//             playerWins += 1;
//         } else if (winner === 'computer') {
//             computerWins += 1;
//         }

//   console.log('Player used ' + playerMove + ' and the Computer used ' + computerMove);
//   console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
//     }
//     if (playerWins === 5) {
//         console.log("Player wins the game!");
//     } else {
//         console.log("Computer wins the game!");
//         return [playerWins, computerWins];
//     }
// }
// playToFive();