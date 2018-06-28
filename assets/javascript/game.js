// Need counter for wins 
var wins = 0;

//Need loss counter
var losses = 0;

//Keep track of user input 
var userInput = [];

//Set max number of guesses for user 
var guessesLeft = 10;

//Need to generate random letter 

//Make an array of random letters a e i 

//Generate number from 0 to length of array ----> 0  1 2 for aei  then save 

//handle user input if they guess correctly need to update win counter by 1 ----> reset game "new random letter and rs incorrect guesses"

//if they guess incorrectly decrease guessesLeft and ----> keep track of the user guess 

//Keep track of user guesses

//Need to target wins tag to display your number of wins in HTML
var winsTag = document.getElementById("wins");
winsTag.innerHTML = wins;

var lossesTag = document.getElementById("losses");
lossesTag.innerHTML = losses;

var guessesLeftTag = document.getElementById("guessesLeft");
guessesLeftTag.innerHTML = guessesLeft;
var randomLetters = ["a","e","i"];
var random = Math.floor(Math.random() * 3);
var randomLetter = randomLetters[random];
console.log(randomLetter);