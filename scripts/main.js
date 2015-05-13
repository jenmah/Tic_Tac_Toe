var gameboard = ['0','1','2','3','4','5','6','7','8'];
var newGameboard = [];

var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var moveNumber = 0;

var xPlayerIndex = [];
var yPlayerIndex = [];
var firstPlayerWins = 0;
var secondPlayerWins = 0;
var winner = '';

$('.button').on('click', getMoves);
function getMoves() {
    if ((moveNumber % 2) === 0) {
      console.log('first player played');
      $(this).html('X');
      currentMoveIndex = parseInt(this.value);
      gameboard[currentMoveIndex] = 'X';
      newGameboard = gameboard;
      xPlayerIndex.push(currentMoveIndex);
        $.each(winningCombinations, function(index, value) {
          if ( $.inArray(value[0], xPlayerIndex) !== -1 && $.inArray(value[1], xPlayerIndex) !== -1 && $.inArray(value[2], xPlayerIndex) !== -1) {
              $('h2').html('PLAYER ONE WON!');
              firstPlayerWins += 1;
              winner = firstPlayer;
          }
        })
    } else {
      console.log('second player played');
      $(this).html('O');
      currentMoveIndex = parseInt(this.value);
      gameboard[currentMoveIndex] = 'O';
      newGameboard = gameboard;
      yPlayerIndex.push(currentMoveIndex);
        $.each(winningCombinations, function(index, value) {
          if ( $.inArray(value[0], yPlayerIndex) !== -1 && $.inArray(value[1], yPlayerIndex) !== -1 && $.inArray(value[2], yPlayerIndex) !== -1) {
              $('h2').html('PLAYER TWO WON!');
              secondPlayerWins += 1;
              winner = secondPlayer;
          }
        })
    }
    moveNumber += 1;
} 




$('.refresh-button').on('click', reload);
    function reload() {
      window.location.reload();
  }


// function playToFive() {
//     while (firstPlayerWins < 5 && secondPlayerWins < 5)  {
//       getMoves();

//         if (firstPlayerWins === 5) {
//             console.log("Player one wins the game!");
//         } else {
//             console.log("Player two wins the game!");
//         }
// }

// playToFive();

