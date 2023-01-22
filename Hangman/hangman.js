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
function includes(char, string) {
  for (var i = 0; i < string.length; i++) {
     var currentStrChar = string[i];
    if (char === currentStrChar) {
      return true;
    }
  }
  return false;
}
function createDivWithText(text) {
  var div = document.createElement('div');
  div.innerHTML = text;
  return div;
}
function getRandomEntry(array) {
  var randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}
function Hangman(secretWord) {
  this.originalGameState = document.body.innerHTML;
  this.secretWord = secretWord;
  this.charactersGuessed = '';
  this.remainingBadGuesses = 6;
}
Hangman.prototype.playerLost = function () {
  return this.remainingBadGuesses === 0;
};
Hangman.prototype.showGameEnd = function () {
  var gameContainer = document.getElementById('game');
  gameContainer.classList.add('game-inactive');
  var gameEndContainer = document.getElementById('game-end');
  gameEndContainer.classList.remove('no-display');
  var messageContainer = document.getElementById('game-end-message');
  if (this.playerLost()) {
    messageContainer.innerHTML = 'You Lose!';
  } else {
    messageContainer.innerHTML = 'You Win!';
  }
  var secretContainer = document.getElementById('revealed-secret');
  secretContainer.innerHTML = 'The word was: ' + this.secretWord;
};
Hangman.prototype.playerWon = function () {
  for (var i = 0; i < this.secretWord.length; i++) {
    var secretChar = this.secretWord[i];
    if (!includes(secretChar, this.charactersGuessed)) {
      return false;
    }
  }
  return true;
};
Hangman.prototype.addToCharactersGuessed = function (char) {
  this.charactersGuessed += char;
};
Hangman.prototype.appendGuessedCharacters = function (key) {
  var guessedCharDiv = createDivWithText(key);
  guessedCharDiv.classList.add('character');
  var container = document.getElementById('guessed-characters');
  container.append(guessedCharDiv);
};
Hangman.prototype.updateSecretCharacter = function (char) {
  var allsecretChars = document.getElementById('secret-characters');
  for (var i = 0; i < allSecretChars.length; i++) {
    var secretChar = allSecretChars[i];
    if (char.toLowerCase() === secretChar.innerHTML.toLowerCase()) {
      secretChar.classList.remove('hidden');
Hangman.prototype.revealBodyPart = function () {
  this.remainingBadGuesses -=1;
  function reveal(id) {
    var container = document.getElementById(id);
    container.classLIst.remove('intact');
  }
  if (this.remainingBadGuesses === 5){
    reveal('head');
  }  else if (this.remainingBadGuesses === 4) {
    reveal('body');
  } else if (this.remainingBadGuesses === 3) {
    reveal('arm-left');
  } else if (this.remainingBadGuesses === 2) {
    reveal('arm-right');
  } else if (this.remainingBadGuesses === 1) {
    reveal('leg-left')
  }
};
    }
  }
};
Hangman.prototype.renderRemianingGuesses = function () {
  var container = docuemnt.getElementById('remaining-guesses');
}

