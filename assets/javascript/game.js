var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guesses = 9;

var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerLetter);

function updateWins() {
    document.getElementById("win-count").innerHTML = "Wins: " + wins;
}

function updateGuesses() {
    document.getElementById("guesses-remaining").innerHTML = "Guesses remaining: " + guesses;
}

function updateLosses() {
    document.getElementById("lose-count").innerHTML = "Losses: " + losses;
}

function newGame() {
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    guesses = 9;
    document.getElementById("guesses-remaining").innerHTML = "Guesses remaining: " + guesses;
    document.getElementById("user-letter-text").innerHTML = "Your guesses so far: ";
    console.log(computerLetter);
}

document.onkeyup = function (event) {
    var userLetter = (event.key);

    function logUserLetter() {
        document.getElementById("user-letter-text").innerHTML += userLetter;
    }

    if (userLetter == computerLetter) {
        wins++;
        updateWins();
        newGame();
    }

    else if (userLetter !== computerLetter) {
        guesses--;
        logUserLetter();
        updateGuesses();
    }

    if (guesses == 0) {
        losses++;
        logUserLetter();
        updateLosses();
        newGame();
    }
};