// Variables to store game state
let secretNumber = Math.floor(Math.random() * 100) + 1; // Random number 1-100
let score = 100;

function checkGuess() {
    const input = document.getElementById('guessInput');
    const guess = Number(input.value);
    const messageDisplay = document.getElementById('message');
    const scoreDisplay = document.getElementById('score');

    // Validation
    if (!guess || guess < 1 || guess > 100) {
        messageDisplay.innerText = "Please enter a valid number between 1 and 100.";
        messageDisplay.style.color = "red";
        return;
    }

    // Check guess
    if (guess === secretNumber) {
        messageDisplay.innerText = "Correct! You won! 🎉";
        messageDisplay.style.color = "green";
        document.body.style.backgroundColor = "#ccffcc"; // Brief green flash or background change
    } else if (guess > secretNumber) {
        messageDisplay.innerText = "Too High! Try again.";
        messageDisplay.style.color = "orange";
        score -= 10; // Decrease score
    } else {
        messageDisplay.innerText = "Too Low! Try again.";
        messageDisplay.style.color = "orange";
        score -= 10; // Decrease score
    }

    // Game Over condition
    if (score <= 0) {
        messageDisplay.innerText = "Game Over! The number was " + secretNumber;
        messageDisplay.style.color = "red";
        score = 0;
    }

    // Update score on screen
    scoreDisplay.innerText = score;

    // Clear input for next guess
    input.value = '';
    input.focus();
}

function restartGame() {
    // Reset variables
    score = 100;
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset UI
    document.getElementById('score').innerText = score;
    document.getElementById('message').innerText = "";
    document.getElementById('guessInput').value = "";
    document.body.style.backgroundColor = "white";
}
