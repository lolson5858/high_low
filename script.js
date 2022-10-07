let Mnumber = getMaxNumber('Enter a maximum number!')

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
console.log(numActual);

// function that defines the number to be guessed within the user's given range
function defineNum(number) {

  let num = Math.floor(Math.random() * number + 1);
  console.log(num);
  return num;
}

function clearResponse () {
  let errMsg = document.getElementById('errMsg');
  let msg = document.getElementById('msg');
  errMsg.classList.add('hide');
  msg.classList.add('hide');
}

//function that checks the user's guess for validity and proximity to target
function guessCheck(num) {
  let guess = Number(document.getElementById('guess').value);
  let errMsg = document.getElementById('errMsg');
  let msg = document.getElementById('msg');


  if (isNaN(guess)) {
    errMsg.innerHTML = 'That is not a number!';
    errMsg.style.color = 'red';
  // } else if (guess > num || guess < 0) {
  //   errMsg.innerHTML = 'That number is not in range. Please try again!';
  //   errMsg.style.color = 'red';
  } else if( guess > Mnumber || guess < 0) {
    errMsg.innerHTML = 'That number is not in range, please try again.'
    errMsg.style.color = 'red';
  } else if (guess == num) {
    msg.innerHTML = "Nice, you got it!!!"
  } else if (guess < num) {
    msg.innerHTML = "It looks like your guess is a bit low. Guess again!"
  } else {
    msg.innerHTML = "Looks like your guess is a little high. Try again!"
    console.log(guess);
  }
  errMsg.classList.remove('hide');
  msg.classList.remove('hide');
}
