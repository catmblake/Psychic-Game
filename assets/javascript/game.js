
{/* Step 1:
// create an array for the letters of the alphabet

// Step 2:
// create a variable for computer letter such that it is randomly selected from the alphabet.

// Step 3:
// create a variable for user letter such that it is tied to a keyboard input
// the input must be a letter of the alphabet. Otherwise we alert the user to try again.

// Step 4:
// When a user types a letter display it onscreen.
// Compare the user letter and computer letter.
// If ul = cl. +1 win and reset the game.
// If ul != cl guesses remaining -1. letter guessed remains onscreen and the user must guess again.
// if ul != cl and no more guesses remain. Loss +1 and the game resets. */}

var wins = 0;

var losses = 0;

var guesses = 9;

var yourGuess = [];



function newGame() {
    guesses = 9;
    yourGuess = [];
    document.getElementById("guesses-remaining").innerHTML = guesses;
    document.getElementById("user-letter-text").innerHTML = yourGuess;
    startGame();
    console.log(computerLetter);
}
function updateWins() {
    document.getElementById("win-count").innerHTML = "Wins: " + wins;
}
function updateGuesses() {
    document.getElementById("guesses-remaining").innerHTML = "Guesses remaining: " + guesses;
}

function updateLosses() {
    document.getElementById("lose-count").innerHTML = "Losses: " + losses;
}

    function logUserLetter() {
        document.getElementById("user-letter-text").innerHTML = "Your guesses so far: " + userLetter;
    }

function startGame() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    var computerLetter = randomLetter;
}
startGame();

function checkLetter() {
    document.onkeyup = function (event) {
        var userLetter = (event.key).toLowerCase();
        yourGuess.push(userLetter);
        console.log(userLetter);

    if (userLetter == computerLetter) {
        console.log(guesses, userLetter);
        wins++;
        logUserLetter();
        updateWins();
        newGame();
    }
    if (userLetter !== computerLetter) {
        guesses--;
        console.log(guesses, userLetter);
        logUserLetter();
        updateGuesses();
    }
    if (guesses == 0) {
        console.log(guesses, userLetter);
        losses++;
        logUserLetter();
        updateLosses();
        newGame();
        return;
    }
}
}

    startGame();
    checkLetter();