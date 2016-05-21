/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess = playersGuessSubmission();
    winningNumber = generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(min, max){
	return Math.floor(Math.random() * 101);
}

// Fetch the Players Guess


function playersGuessSubmission(){
	var playersGuess = +$('#playersGuess').val();
}


$(document).ready(function(){
	$('#guessButton').on('click', playersGuessSubmission);	
});

$(document).ready(function(){
	$('#giveUpButton').on('click', function() {
		$(this).find('h2').slideDown();
	});	
});

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 
var numberOfGuesses = 0;
var listOfGuesses = [];

//Figure it out!

function checkGuess(){
	if (playersGuess === winningNumber) {
		return "You won!"
	} else {
		if (listOfGuesses.indexOf(playersGuess) === -1) {
			numberOfGuesses += 1;
			listOfGuesses.push(playersGuess);
		}
		return "Try again!"
	}
}



// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

