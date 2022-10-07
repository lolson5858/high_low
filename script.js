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


//function that checks the user's guess for 
function guessCheck(num) {
  let guess = Number(document.getElementById('guess').value);

  let msg = document.getElementById('msg');
  

  if (guess == num) {
    msg.innerHTML = "Nice, you got it!!!"
  } else if (guess < num) {
    msg.innerHTML = "It looks like your guess is a bit low. Guess again!"
  } else {
    msg.innerHTML = "Looks like your guess is a little high. Try again!"
  }
  msg.classList.remove('hide');
}

