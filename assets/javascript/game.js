var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var victories = 0;
var losses = 0;
var livesLeft = 9;
var lettersUsed = [];

 var userGuessText = document.getElementById("userguess-text");
 var livesLeftText = document.getElementById("livesleft-text");
 var victoryText = document.getElementById("victory-text");
 var loseText = document.getElementById("lose-text");

 var reset = function () {
     livLeft = 9;
     guessedLetters = [];
    
}
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    livesLeft--;
        document.getElementById("livesleft-text").innerHTML = livesLeft
    var userGuess = event.key;
    lettersUsed.push(userGuess); 
        document.getElementById("userguess-text").innerHTML = lettersUsed.join(", ");
    console.log(computerGuess);
    console.log(userGuess);
    console.log("--"); //used to seperate guesses in log//
// sorting logic out and getting display on page.  
    if (userGuess === computerGuess) {
        victories++;
        document.getElementById("victory-text").innerHTML = victories;
        reset();
    } 
    if (livesLeft === 0)
        losses++;
            document.getElementById("lose-text").innerHTML = losses;
        reset();
    console.log(victories);
    console.log(losses);
    console.log(lettersUsed)
}