$(document).ready(function() {
	var winningNumber = generateWinningNumber();
	var playersGuess = 0;
	var numberOfGuesses = 0;
	var listOfGuesses = [];



	/* **** Guessing Game Functions **** */

	// Generate the Winning Number

	function generateWinningNumber(min, max){
		return Math.floor(Math.random() * 101);
	}

	// Fetch the Players Guess

	function playersGuessSubmission(){
		playersGuess = +$('#playersGuess').val();
		// console.log(playersGuess);
		$('#playersGuess').val('');
	}


	// Determine if the next guess should be a lower or higher number

	function lowerOrHigher(){
		console.log('entered into lowerOrHigher');
		var difference = winningNumber - playersGuess;
		var distance = Math.floor(difference/5) * 5;
		if (difference > 0) {
			distance += 5;
		} else {
			distance -= 5;
		}
		return distance;
	}


	function guessMessage(){
		// console.log('entered into guessMessage');
		var direction = "";
		if (lowerOrHigher() > 0) {
			direction = "lower"
		} else if (lowerOrHigher() < 0) {
			direction = "higher"
		}
		return "Your guess is " + direction + " and within " + Math.abs(lowerOrHigher()) + " digits of the winning number!"
	}


	// Check if the Player's Guess is the winning number 

	function checkGuess(){
		console.log("numberOfGuesses: " + numberOfGuesses);
		console.log("listOfGuesses: " + listOfGuesses);
		console.log("playersGuess: " + playersGuess);
		console.log("winningNumber: " + winningNumber);
		if (playersGuess === winningNumber) {
			$('#userMessage').html("You Won!");
		} else if (listOfGuesses.indexOf(playersGuess) === -1) {
			numberOfGuesses += 1;
			listOfGuesses.push(playersGuess);
			console.log('entered in elif');
			var message = guessMessage();
			$('#userMessage').html(message);
		} else {
			$('#userMessage').html("You already guessed that one, silly bean!");
		}
	}


	// Create a provide hint button that provides additional clues to the "Player"

	function provideHint(){
		var hintList = [generateWinningNumber(), winningNumber, generateWinningNumber()];
		$('#userMessage').html("It's one of these guys: " + hintList + " Guess again!" );
	}


	// Allow the "Player" to Play Again

	function playAgain(){
		// add code here
	}


	/* **** Event Listeners/Handlers ****  */

	$('#guessButton').on('click', playersGuessSubmission);
	$('#guessButton').on('click', checkGuess);
	$('#giveUpButton').on('click', provideHint);

});




















