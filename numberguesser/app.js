/*
* Game Function
* Player must guess a number between a min and a max
* Player gets a certain amount of guesses
* Notify the player of the correct answer if loose
* Let player choose to play agains
*
*
*/



let min = 1,
    max = 10;
    winNum = getRandomNum(min, max);
    numOfGuessLeft = 3;

// ui elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min & max
minNum.textContent = min;
maxNum.textContent = max;

// Play again
game.addEventListener('mousedown', function(e){
  if (e.target.className === 'play-again'){
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);
  // validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }
  // check in winning number
  if(guess === winNum){
    gameOver(true, `${winNum} is correct, YOU WIN!`);
  }else{
    // wrong number
    numOfGuessLeft -= 1;

    if(numOfGuessLeft === 0){
      // Game Over - lost
      gameOver(false, `Game over, you lost. The correct number was ${winNum} `)
    }
    else{
      // Game continues - answer wrong
      setMessage(`Guess is not corret,  ${numOfGuessLeft} guesses left `, 'red');
      // clears input
      guessInput.value = '';
    }

    }
});

// functions

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
      // disable input
      guessInput.disabled = true;
      // change border color
      guessInput.style.borderColor = 'green';
      // text color
      message.style.color = color;
      // set message
      setMessage(msg);
  // play again
  guessBtn.value = 'Play Again?'
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)+min);
}

