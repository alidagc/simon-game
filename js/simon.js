function SimonGame () {
  this.colors         = ["red", "green", "blue", "yellow"];
//our current sequence
  this.sequence       = [];
//where the use is in the sequence
  this.userClickCount = 0;
//this will keep track of what the player's score is
  this.round          = 1;
}

SimonGame.prototype.startGame = function (){
  console.log('Starting the game...');
  this.addColor();
  this.showSequence();
};
//Chooses one of the 4 colors at random and adds it to the sequence.
SimonGame.prototype.addColor = function () {
  var randomIndex = Math.floor(Math.random()* 4);
  this.sequence.push(this.colors[randomIndex]);
};

SimonGame.prototype.showSequence = function () {
  var ourSequence = this.sequence;
  var i = 0;

  $('#buttons-container').addClass('blocked');

  var intervalId = setInterval(function () {
    console.log(i);
    if (i >= ourSequence.length) {
      clearInterval(intervalId);
      $('#buttons-container').removeClass('blocked');
      return;
    }
// we want to make and equivalent to $('#red').addClass('light-on');
    $('#'+ ourSequence[i]).addClass('light-on');

    setTimeout(function (){
      // turns off the light by removing the class
      $('.simon-buttons').removeClass('light-on');
    },600);
    i += 1;
  }, 1200);
};

SimonGame.prototype.nextRound = function () {
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;

  $('#counter').html(this.round);
  this.round +=1;
};


SimonGame.prototype.gameOver = function () {
  this.sequence = [];
  this.userClickCount = 0;
  this.round = 1;
  $('#counter').html(0);

  this.startGame();
};
