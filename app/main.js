// =============================================================================
// Some example variables to get you started. The first three are the elements
// in the index.html file. The last is for storing the computer's number. You
// can see how they are being used below. I recommend keeping these as they are.
// You may want to add more.
// =============================================================================

var msgDisplayEl = document.getElementById('msgDisplay');
var userInputEl = document.getElementById('userInput');
var submitBtnEl = document.getElementById('submitBtn');
var minRangeEl = document.getElementById('minRange');
var maxRangeEl = document.getElementById('maxRange');
var number;
var counter = 0;

// =============================================================================
// Some example functions, to get you started. You can change, delete, add to
// these however you like!
// =============================================================================

function generateNumber(min, max) {
  var numRange = Math.floor(Math.random()*(max-min) + 1) + min;
  console.log(numRange);
  return numRange;
};

function clearInput() {
  userInputEl.value = '';

};

// =============================================================================
// The guessing game. Everytime the user clicks the button on the page, this
// function will run. Don't change the name of it unless you change the
// corresponding name of the function in the html doc. There's really no reason
// to do that.
// You can see that the guessingGame function is receiving userInput. If you're
// feeling overwhelmed, you can just trust that that is always true for this
// program, but I promise it's not magical. Go look around at the index.html
// file if you want to try and figure out how that's happnening.
// Change any and all of this code (except the name and the parameter)! Good
// Luck!
// =============================================================================

function guessingGame(userInput) {

if (!userInput) {
  if ((submitBtnEl.value === "Start") || (submitBtnEl.value === "Play Again")) {
      msgDisplayEl.innerHTML = "Please guess a number."; 
      number = generateNumber(parseInt(minRangeEl.value), parseInt(maxRangeEl.value));
      submitBtnEl.value = "Submit"
  }
    
  } else if (userInput < number.toString()) {
    msgDisplayEl.innerHTML = "So sorry, that is not correct. (Guess HIGHER.)"
    clearInput();
    counter++;
  } else if (userInput > number.toString()) {
    msgDisplayEl.innerHTML = "So sorry, that is not correct. (Guess LOWER.)"
    clearInput();
    counter++;
  } else if (userInput === number.toString()) {
    msgDisplayEl.innerHTML = "You guessed it! It only took you " + counter + " tries!  Great..... job?"
    clearInput();
    submitBtnEl.value = "Play Again"
  }
}
