// This object stores our current theme settings
let currentTheme = {
    background: 'white',
    text: 'black'
};

function applyTheme() {
    // 1. Get values from dropdowns
    const bgSelect = document.getElementById('bgColor').value;
    const textSelect = document.getElementById('textColor').value;

    // 2. Apply styles to the Body element
    document.body.style.backgroundColor = bgSelect;
    document.body.style.color = textSelect;

    // 3. Update our theme object
    currentTheme.background = bgSelect;
    currentTheme.text = textSelect;

    // 4. Log the change
    displayThemeStatus();
}

function resetTheme() {
    // Restore defaults
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

    // Reset dropdowns
    document.getElementById('bgColor').value = 'white';
    document.getElementById('textColor').value = 'black';

    // Update object
    currentTheme = {
        background: 'white',
        text: 'black'
    };

    displayThemeStatus();
}

function displayThemeStatus() {
    const log = document.getElementById('currentThemeLog');
    // Using JSON.stringify makes it easy to see the object info as text
    log.innerText = "Current Theme Object:\n" + JSON.stringify(currentTheme, null, 2);
}
