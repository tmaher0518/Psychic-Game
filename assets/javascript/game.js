//Setting variables for wins, losses, guessesLeft, guessedSoFar, and ComputerChoices.  Created an array to hold the letters.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = []; // array to push user choices to
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Adding onekeyup function, user guess, user guesses so far, and random number selection. 
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
    guessesSoFar.push(userGuess); 

    //Adding Alert messages, resetting the guesses back to 9, and removing previous guesses from the display. Decreasing the user guesses left.

    if (userGuess == computerGuess) {
        wins++;
        alert('You\'ve guessed correctly. You really are Psychic!');
        guessesLeft = 9; 
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You didn\'t guess the correct letter. Try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }  
          
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of?</p>" +
    "<p>Wins: " + 
    wins + 
    "</p>" +
    "<p>Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>";

    document.querySelector('#game').innerHTML = html;

}