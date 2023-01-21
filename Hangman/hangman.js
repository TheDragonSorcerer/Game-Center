Hangman.prototype.revealBodyPart = function () {
  this.remainingBadGuesses -= 1;
  function reveal(id) {
    var container = document.getElementById(id);
      container.classList.remove('intact');
  }
  if (this.remainingBadGuesses == 5){
    reveal('head');
  }  else if (this.remainingBadGuesses == 4) {
    reveal('body');
  } else if (this.remainingBadGuesses == 3) {
    reveal('arm-left');
  } else if (this.remainingBadGuesses == 2) {
    reveal('arm-right');
  } else if (this.remainingBadGuesses == 1) {
    reveal('leg-left');
  }
};