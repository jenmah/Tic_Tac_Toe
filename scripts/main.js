var gameboard = [['null','null','null'],
                 ['null','null','null'],
                 ['null','null','null']];


var moveNumber = 0;

// stores the players' moves
$('.button').on('click', getMoves);
function getMoves() {
      if ((moveNumber % 2) === 0) {
          console.log('first move made');
          $(this).html('X');
          currentMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][currentMoveIndex] = 'X';
      } else {
          console.log('second move made');
          $(this).html('O');
          currentMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][currentMoveIndex] = 'O';
      }
      moveNumber += 1;
    } 













