function validateForm(event) {
    // Prevent the form from actually submitting to a server (since we don't have one)
    event.preventDefault();

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const successMessage = document.getElementById('successMessage');

    // Reset errors (hide them first)
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passError.style.display = 'none';
    successMessage.style.display = 'none';

    let isValid = true;

    // 1. Validate Username (Simple length check)
    if (username.length < 3) {
        nameError.style.display = 'block';
        isValid = false;
    }

    // 2. Validate Email (Using RegExp)
    // This pattern checks for text + @ + text + . + text
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // 3. Validate Password (Length check)
    if (password.length < 6) {
        passError.style.display = 'block';
        isValid = false;
    }

    // Only show success if all checks pass
    if (isValid) {
        successMessage.style.display = 'block';

        // Optional: clear form
        // document.getElementById('signupForm').reset();
    }

    return isValid;
}
