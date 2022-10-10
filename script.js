let Mnumber = getMaxNumber('Enter a maximum number!')
let msg = document.getElementById('msg');
let guessArr = [];
const submit = document.getElementById('submit');
// function that prompts user for max number and returns input
function getMaxNumber(prompt) {
  let validInput = false;
  let maxNumber, input;
  let maxNum = document.getElementById('maxNum')
  while(!validInput) {
    input = window.prompt(prompt);
    maxNumber = Math.round(Number(input));
    console.log(maxNumber);

    if(maxNumber != NaN && maxNumber > 0) {
      validInput = true;
    }
  }

  maxNum.innerHTML = maxNumber;
  return maxNumber;
  
}

let numActual = defineNum(Mnumber)
// console.log('Target Number: ' + numActual);

// function that defines the number to be guessed within the user's given range
function defineNum(number) {

  let num = Math.floor(Math.random() * number + 1);
  return num;
}


//function that checks the user's guess for validity and proximity to target
function guessCheck(num) {
  let guess = Number(document.getElementById('guess').value);
  let errMsg = document.getElementById('errMsg');
  let win = (guess == num);
  let arrFormat = guessArr.join(', ');
  // console.log(guessArr);
  
  if (isNaN(guess)) {
    errMsg.innerHTML = 'That is not a number!';
    errMsg.style.color = 'red';
    errMsg.style.display = 'inline'
    msg.style.display = 'none';
  } else if( guess > Mnumber || guess < 0) {
    errMsg.innerHTML = 'That number is not in range, please try again.'
    errMsg.style.color = 'red';
    errMsg.style.display = 'inline'
    msg.style.display = 'none';
  } else if( guessArr.includes(guess)) {
    errMsg.innerHTML = 'You\'ve already guessed that number, please enter another!'
    errMsg.style.color = 'red';
    errMsg.style.display = 'inline'
    msg.style.display = 'none'; 
  } else if (win && guessArr.length == 0) {
    guessArr.push(guess);
    msg.innerHTML = `Nice, you got it on the first attempt by guessing ${guessArr.pop()} to win!`;
    playAgain();
  } else if (win) {
    guessArr.push(guess);
    msg.innerHTML = `Nice, you got it!!! It took you ${guessArr.length} tries. Your guesses were ${arrFormat} and finally ${guessArr.pop()} to win!`;
    playAgain();
  } else {
    feedback(guess, num);
  }
}
//function to display play again button
function playAgain() {
  let playAgainBtn = document.getElementById('playAgain');
  playAgainBtn.classList.remove('hide');
  msg.style.display = "block";
  errMsg.style.display = 'none';
  submit.style.display = 'none';
}

//feedback function refactored
function feedback(guess, num) {
  msg.style.display = "block";
  errMsg.style.display = 'none';
  if (guess < num) {
      msg.innerHTML = "It looks like your guess is a bit low. Guess again!";
      guessArr.push(guess);
  } else {
    msg.innerHTML = "Looks like your guess is a little high. Try again!"
    guessArr.push(guess);
    console.log(guess);
  } 
  // visual feedback for guesses
  if (guessArr.length % 2 == 0) {
    body.style.backgroundColor = '#d7d7a7';
  } else {
    body.style.backgroundColor = '#6767a7';
  }
}


let body = document.querySelector("body")

//areas to improve: refactoring win conditions, refactor error msgs, add visual feedback after guesses