// --- Digital Clock Logic ---

function updateClock() {
    const now = new Date(); // Get current time

    // Extract hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if less than 10 (e.g., 9 becomes "09")
    // toString() converts number to text, padStart adds 0 to start
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Update the HTML
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = timeString;
}

// Update clock every 1 second (1000 milliseconds)
setInterval(updateClock, 1000);
updateClock(); // Run once immediately so we don't wait 1 second

// --- Countdown Timer Logic ---

let timerInterval;

function startTimer() {
    // Clear any existing timer loops
    clearInterval(timerInterval);

    const minInput = document.getElementById('minutes').value;
    const secInput = document.getElementById('seconds').value;

    let totalTimeInSeconds = (Number(minInput) * 60) + Number(secInput);

    if (totalTimeInSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    displayTime(totalTimeInSeconds);

    // Start the countdown
    timerInterval = setInterval(function () {
        totalTimeInSeconds--; // Decrease by 1 second

        displayTime(totalTimeInSeconds);

        if (totalTimeInSeconds <= 0) {
            clearInterval(timerInterval); // Stop the timer
            alert("Time's Up!");
        }
    }, 1000);
}

function displayTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    const mString = m.toString().padStart(2, '0');
    const sString = s.toString().padStart(2, '0');

    document.getElementById('timerDisplay').innerText = `${mString}:${sString}`;
}
