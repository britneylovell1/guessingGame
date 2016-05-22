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
		$('#playersGuess').val('');
	}


	// Determine if the next guess should be a lower or higher number

	function lowerOrHigher(){
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
		var direction = "";
		if (lowerOrHigher() > 0) {
			direction = "lower"
		} else if (lowerOrHigher() < 0) {
			direction = "higher"
		}
		return "Your guess is " + direction + " and within " 
			+ Math.abs(lowerOrHigher()) + " digits of the winning number!"
	}


	// Check if the Player's Guess is the winning number 

	function checkGuess(){
		if (numberOfGuesses > 3) {
			$('#userMessage').html("Bummer! You didn't win! Play again!");
			//Image curtosy of http://wallpapercave.com/w/VC5dIf8
			$('header').css("background-image", "url(../guessingGame/img/loser.jpg)");
			$('header').css("color", "#cc0000");
		} else {

			if (playersGuess === winningNumber) {
				$('#userMessage').html("You Won!");
				$('header').css("background-image", "url(../guessingGame/img/winner-1.jpg)");

			} else if (listOfGuesses.indexOf(playersGuess) === -1) {
				numberOfGuesses += 1;
				listOfGuesses.push(playersGuess);

				var message = guessMessage() + " You've got " 
					+ (5 - numberOfGuesses) + " chances left.";
				$('#userMessage').html(message);

			} else {
				$('#userMessage').html("You already guessed that one, silly bean!");
			}
		}
	}


	// Create a provide hint button that provides additional clues to the "Player"

	function provideHint(){
		var hintList = [generateWinningNumber(), winningNumber, generateWinningNumber()];
		$('#userMessage').html("It's one of these guys: " + hintList + " Guess again!" );
	}


	// Allow the "Player" to Play Again

	function playAgain(){
		winningNumber = generateWinningNumber();
		playersGuess = 0;
		numberOfGuesses = 0;
		listOfGuesses = [];
		$('#userMessage').html("");
		// Image curtosy of http://freedesignfile.com/146989-colored-flag-with-confetti-holiday-background-04/
		$('header').css("background-image", "url(../guessingGame/img/header.jpg)");
		$('header').css("color", "#fff");
	}

	


	/* **** Event Listeners/Handlers ****  */

	$('#guessButton').on('click', playersGuessSubmission);
	$('#guessButton').on('click', checkGuess);
	$('#giveUpButton').on('click', provideHint);
	$('#playAgainButton').on('click', playAgain);

	// Return Key
	$('#playersGuess').keypress(function(event) {
		 var key = event.which;
		 if(key == 13) {
		    $('#guessButton').click();
		    return false;  
		 }
	});   

});




















