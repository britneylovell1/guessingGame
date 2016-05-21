/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var winningNumber = generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(min, max){
	return Math.floor(Math.random() * 101);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	var playersGuess = +$('#playersGuess').val();
	console.log(playersGuess);
	$('#playersGuess').val('');
}

// $(document).ready(function(){
// 	$('#giveUpButton').on('click', function() {
// 		$(this).find('h2').slideDown();
// 	});	
// });

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(playersGuess){
	var numberOfGuesses = 0;
	var listOfGuesses = [];
	console.log("numberOfGuesses: " + numberOfGuesses);
	console.log("listOfGuesses: " + listOfGuesses);
	console.log("playersGuess: " + playersGuess);
	console.log("winningNumber: " + winningNumber);
	if (playersGuess === winningNumber) {
		$('h2').html("You Won!");
	} else {
		if (listOfGuesses.indexOf(playersGuess) === -1) {
			numberOfGuesses += 1;
			listOfGuesses.push(playersGuess);
			$('h2').html("Try Again!");
		} else {
			$('h2').html("You already guessed that one, silly bean!");
		}
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

$(document).ready(function() {
	$('#guessButton').on('click', playersGuessSubmission);
	$('#guessButton').on('click', checkGuess);
	$('#giveUpButton').on('click', function() {
		$('h2').html("You Lost!")
	});
});




















