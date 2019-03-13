// psuedo code first
// set player and computer variables
// computerChoice
// key up event userGuess
// determine if correct guess
// iff correct players gets 1 win 
// else player loses 1 life loop 9 times until lose

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];

var victories = 0;
var losses = 0;
var livesLeft = 9;
var lettersUsed = [];

var userGuessText = document.getElementById("userguess-text");
var livesLeftText = document.getElementById("livesleft-text");
var computerPickText = document.getElementById("computerpick-text");
var victoryText = document.getElementById("victory-text");
var loseText = document.getElementById("lose-text");


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    console.log(userGuess);
    console.log("--"); //used to seperate guesses in log//
// figuring out how to save keys pressed in lettersUsed array // 
if (userGuess === computerGuess) {
    victories++;
} else if (userGuess !== computerGuess)



}