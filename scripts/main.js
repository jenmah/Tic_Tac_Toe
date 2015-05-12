var gameboard = ['null','null','null','null','null','null','null','null','null'];

var winningCombinations = ['X','X','X','null','null','null','null','null','null'];
                          ['null','null','null','X','X','X','null','null','null'];
                          ['null','null','null','null','null','null','X','X','X'];
                          ['X','null','null','X','null','null','X','null','null'];
                          ['null','X','null','null','X','null','null','X','null'];
                          ['null','null','X','null','null','X','null','null','X'];
                          ['X','null','null','null','X','null','null','null','X'];
                          ['null','null','X','null','X','null','X','null','null'];

var moveNumber = 0;

$('.button').on('click', getMoves);
function getMoves() {
    if ((moveNumber % 2) === 0) {
        console.log('first player played');
        $(this).html('X');
        currentMoveIndex = parseInt(this.value);
        gameboard[currentMoveIndex] = 'X';
    } else {
        console.log('second player played');
        $(this).html('O');
        currentMoveIndex = parseInt(this.value);
        gameboard[currentMoveIndex] = 'O';
    }
    moveNumber += 1;
} 


function getWinner() {

}









// stores the players' moves
// $('.button').on('click', getMoves);
// function getMoves() {
//       if ((moveNumber % 2) === 0) {
//           console.log('first player played');
//           $(this).html('X');
//           currentMoveIndex = parseInt(this.value);
//           gameboard[$(this).data('position')][currentMoveIndex] = 'X';
//       } else {
//           console.log('second player played');
//           $(this).html('O');
//           currentMoveIndex = parseInt(this.value);
//           gameboard[$(this).data('position')][currentMoveIndex] = 'O';
//       }
//       moveNumber += 1;
//     } 