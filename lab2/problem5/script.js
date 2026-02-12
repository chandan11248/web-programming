// Array of question objects
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "None of the above"],
        answer: "1995"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Load the first question when the page loads
loadQuestion();

function loadQuestion() {
    // Get the current question object
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question text
    document.getElementById('question').innerText = currentQuestion.question;

    // Display options
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // Clear previous options

    // Loop through options and create buttons
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = currentQuestion.options[i];

        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = function () { selectAnswer(option); }; // When clicked, call selectAnswer
        optionsDiv.appendChild(button);
    }
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if correct
    if (selectedOption === currentQuestion.answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer was: " + currentQuestion.answer);
    }

    // Show Next button
    document.getElementById('nextBtn').style.display = 'block';

    // Disable all option buttons so user can't click again
    const buttons = document.querySelectorAll('.options button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function nextQuestion() {
    currentQuestionIndex++; // Go to next question

    // Check if quiz is over
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load next
        document.getElementById('nextBtn').style.display = 'none'; // Hide next button again
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none'; // Hide quiz
    document.getElementById('nextBtn').style.display = 'none';

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = "You scored " + score + " out of " + questions.length;
}
