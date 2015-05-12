console.log('this works!');


// var gameBoard = [[null,null,null],
//                  [null,null,null],
//                  [null,null,null]];


// move variables
var firstMove = '';
var secondMove = '';
var thirdMove = '';
var fourthMove = '';
var fifthMove = '';
var sixthMove = '';
var seventhMove = '';
var eigthMove = '';
var ninthMove = '';


// stores the players' moves
var getMove = document.getElementsByClassName("button");

  for(var i=0; i<getMove.length; i++) {
    getMove[i].addEventListener('click', function(event) {
      if (firstMove === '') {
          console.log('first move made');
          firstMove = parseInt(this.value);
          // debugger;
          $(this).html('X');
      } else if (secondMove === '') {
          console.log('second move made');
          secondMove = parseInt(this.value);
          $(this).html('O');
      } else if (thirdMove === '') {
          console.log('third move made');
          thirdMove = parseInt(this.value);
          $(this).html('X');
      } else if (fourthMove === '') {
          console.log('fourth move made');
          fourthMove = parseInt(this.value);
          $(this).html('O');
      } else if (fifthMove === '') {
          console.log('fifth move made');
          fifthMove = parseInt(this.value);
          $(this).html('X');
      } else if (sixthMove === '') {
          console.log('sixth move made');
          sixthMove = parseInt(this.value);
          $(this).html('O');
      } else if (seventhMove === '') {
          console.log('seventh move made');
          seventhMove = parseInt(this.value);
          $(this).html('X');
      } else if (eigthMove === '') {
          console.log('eigth move made');
          eigthMove = parseInt(this.value);
          $(this).html('O');
      } else if (ninthMove === '') {
          console.log('ninth move made');
          ninthMove = parseInt(this.value);
          $(this).html('X');
      }
    });
  }






