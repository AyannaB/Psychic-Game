var wins = 0;
var loss = 0;
var guessesLeft = 10;
var guessedText = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                "n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];

var winText = document.getElementById("Wins");
var lossText = document.getElementById("Losses");
var guessLeftText = document.getElementById("GuessesLeft");
var guessSoFarText = document.getElementById("guessesSoFar");

//Pressed the key 
//Add user guess to the array 
document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase();

//Track Guesses
    if(alphabet.indexOf(userGuess) > -1) {
        if(userGuess === computerGuess) {
            wins++;
            guessesLeft = 10;
            guessedText = [];
            winText.textContent = wins;
            guessSoFarText.textContent = guessedText;
            guessLeftText.textContent = guessesLeft;

        } else {
            if(guessedText.includes(userGuess)) {

        } else {
            guessesLeft--;
            guessedText.push(userGuess);
            guessSoFarText.textContent = guessedText;
            guessLeftText.textContent = guessesLeft;
        }

        }
        if(guessesLeft === 0){
            guessesLeft = 10;
            loss++;
            guessedText = [];
            lossText.textContent = loss;
            guessSoFarText.textContent = guessedText;
            guessLeftText.textContent = guessesLeft;
        }
    }
};

