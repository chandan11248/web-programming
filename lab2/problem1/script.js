// This variable stores the history of calculations.
// An array is like a list that can hold multiple values.
let history = [];

// Function to add numbers or operators to the display
function appendToDisplay(value) {
    // Get the display element (the input box)
    const display = document.getElementById('display');

    // Add the clicked value to the current text in the display
    display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    // .slice(0, -1) removes the last character from the string
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        // eval() takes a string of math (like "2+2") and calculates it.
        // WARNING: In real professional apps, eval() can be dangerous, 
        // but for a simple student lab calculator, it is fine.
        const result = eval(expression);

        // Update the display with the result
        display.value = result;

        // Add this calculation to our history list
        addToHistory(expression + " = " + result);

    } catch (error) {
        // If there is an error (like dividing by zero or bad syntax), show "Error"
        display.value = 'Error';
    }
}

// Function to add a calculation to the history array
function addToHistory(entry) {
    // Add the new entry to the BEGINNING of the array using unshift()
    history.unshift(entry);

    // If we have more than 5 items, remove the oldest (the last one)
    if (history.length > 5) {
        history.pop();
    }

    // Update the screen to show the new history list
    updateHistoryUI();
}

// Function to display the history on the screen
function updateHistoryUI() {
    const historyList = document.getElementById('historyList');

    // Clear the current list HTML so we don't duplicate items
    historyList.innerHTML = '';

    // Loop through each item in our history array
    for (let i = 0; i < history.length; i++) {
        const item = history[i];

        // Create a new list item (<li>) tag
        const li = document.createElement('li');
        li.textContent = item; // Set the text inside the list item

        // Add the list item to the history list (<ul>)
        historyList.appendChild(li);
    }
}

// Function to clear the history
function clearHistory() {
    history = []; // Empty the array
    updateHistoryUI(); // Update the screen
}
