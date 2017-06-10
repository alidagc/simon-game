
var myGame = new SimonGame ();

$(document).ready(function() {
  myGame.startGame();
});

$(document).ready(function() {
  $('.simon-buttons').click(function(){
    var colorJustClicked = $(this).prop('id');
    var currentSequenceColor = myGame.sequence[myGame.userClickCount];

    if (currentSequenceColor === colorJustClicked) {
      // sequence is correct so far. Otherwise, automatic game over.
      // alert('correct!');
      myGame.userClickCount += 1;
        if (myGame.userClickCount >= myGame.sequence.length){
          // alert('Sequence correct!');
          myGame.nextRound();
          // next round code
        }
    }
    else {
      alert('GAME OVER :(');
      myGame.gameOver();
    }
  });
});
