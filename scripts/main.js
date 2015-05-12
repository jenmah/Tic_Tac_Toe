console.log('this works!');


var gameboard = [['null','null','null'],
                 ['null','null','null'],
                 ['null','null','null']];


// move variables
var firstMove = '';
var secondMove = '';
var thirdMove = '';
var fourthMove = '';
var fifthMove = '';
var sixthMove = '';
var seventhMove = '';
var eighthMove = '';
var ninthMove = '';



// stores the players' moves
var getMove = document.getElementsByClassName("button");

  for(var i=0; i<getMove.length; i++) {
    getMove[i].addEventListener('click', function(event) {
      if (firstMove === '') {
          console.log('first move made');
          firstMove = parseInt(this.value);
          $(this).html('X');
          firstMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][firstMoveIndex] = 'X';
      } else if (secondMove === '') {
          console.log('second move made');
          secondMove = parseInt(this.value);
          $(this).html('O');
          secondMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][secondMoveIndex] = 'O';

      } else if (thirdMove === '') {
          console.log('third move made');
          thirdMove = parseInt(this.value);
          $(this).html('X');
          thirdMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][thirdMoveIndex] = 'X';

      } else if (fourthMove === '') {
          console.log('fourth move made');
          fourthMove = parseInt(this.value);
          $(this).html('O');
          fourthMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][fourthMoveIndex] = 'O';

      } else if (fifthMove === '') {
          console.log('fifth move made');
          fifthMove = parseInt(this.value);
          $(this).html('X');
          fifthMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][fifthMoveIndex] = 'X';

      } else if (sixthMove === '') {
          console.log('sixth move made');
          sixthMove = parseInt(this.value);
          $(this).html('O');
          sixthMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][sixthMoveIndex] = 'O';

      } else if (seventhMove === '') {
          console.log('seventh move made');
          seventhMove = parseInt(this.value);
          $(this).html('X');
          seventhMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][seventhMoveIndex] = 'X';  

      } else if (eighthMove === '') {
          console.log('eighth move made');
          eighthMove = parseInt(this.value);
          $(this).html('O');
          eighthMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][eighthMoveIndex] = 'O';

      } else if (ninthMove === '') {
          console.log('ninth move made');
          ninthMove = parseInt(this.value);
          $(this).html('X');
          ninthMoveIndex = parseInt(this.value);
          gameboard[$(this).data('position')][ninthMoveIndex] = 'X'; 
      }
    });
  }




// var gameboard = [['null','null','null'],
//                  ['null','null','null'],
//                  ['null','null','null']];












