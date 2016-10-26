var commonWords = require('./common-words.js');

var randomWord = commonWords[Math.floor(Math.random() * commonWords.length)].toLowerCase();
var randomWordHolder = document.getElementById('random-word-holder');
console.log(randomWord);

var guessesRemainingHolder = document.getElementById('guesses-remaining-holder');
var remainingGuesses = 8;

for (var i = 0; i < randomWord.length; i++){
  var span = document.createElement('span');
  span.textContent = '_';
  randomWordHolder.appendChild(span);
}

guessesRemainingHolder.textContent = remainingGuesses;

document.getElementById('letter').addEventListener('keyup', letterCheck);

function letterCheck(e){
  var correctGuesses = 0;
  if (e.which <= 90 && e.which >= 65){
    var letter = e.key;
    if (randomWord.indexOf(letter) !== -1){
      correctGuesses += 1;
      for (var i = 0; i < randomWord.length; i++){
        if (randomWord[i] == letter){
          document.getElementById('random-word-holder').children[i].textContent = letter;
          document.getElementById('letter').value = '';
        }
      }

    } else {
      alert('Ha! Ha! You guessed wrong!');
      document.getElementById('letter').value = '';
    }

  } else {
    alert('PLEASE enter a letter');
    document.getElementById('letter').value = '';
  }

  // console.log(correctGuesses);
  // console.log(randomWord.length);

  if (correctGuesses === randomWord.length) {
    gameWon();
  }
  // remainingGuesses -= 1;

  // guessesRemainingHolder.textContent = remainingGuesses;
}

function gameWon(){
  alert('You won the game!');
}
