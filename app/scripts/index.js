var commonWords = require('./common-words.js');
commonWords = commonWords.filter(function(word){
  return word.length >= 3;
})

var randomWord;
var randomWordHolder = document.getElementById('random-word-holder');

var remainingGuesses;
var guessesRemainingHolder = document.getElementById('guesses-remaining-holder');

var correctGuesses;

document.getElementById('letter').addEventListener('keyup', letterCheck);

function startGame(){
  remainingGuesses = 8;
  randomWord = commonWords[Math.floor(Math.random() * commonWords.length)].toLowerCase();
  console.log(randomWord);
  correctGuesses = 0;
  guessesRemainingHolder.textContent = remainingGuesses;

  randomWordHolder.textContent = '';

  for (var i = 0; i < randomWord.length; i++){
    var span = document.createElement('span');
    span.textContent = '_';
    randomWordHolder.appendChild(span);
  }
}

function letterCheck(e){
  if (e.which <= 90 && e.which >= 65){
    var letter = e.key;
    remainingGuesses -= 1;
    if (randomWord.indexOf(letter) !== -1){
      for (var i = 0; i < randomWord.length; i++){
        if (randomWord[i] == letter){
          document.getElementById('random-word-holder').children[i].textContent = letter;
          document.getElementById('letter').value = '';
          correctGuesses += 1;
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

  if(remainingGuesses == 0){
    gameOver();
  }

  guessesRemainingHolder.textContent = remainingGuesses;
}

function gameWon(){
  alert('You won the game! The word was ' + randomWord + '!');
  startGame();

}

function gameOver(){
  alert('GAME OVER');
  startGame();
}


startGame();
