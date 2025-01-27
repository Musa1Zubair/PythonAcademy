// game.js

// Function to check the player's progress in a module and give feedback
function checkProgress(level, code) {
    // Example level checks
    let feedbackMessage = '';
    
    switch (level) {
        case 1:
            // Module 1: Check if the code contains "print('Hello, World!')"
            if (code.includes("print('Hello, World!')")) {
                feedbackMessage = "Well done! You successfully printed 'Hello, World!'";
            } else {
                feedbackMessage = "Try again! Remember to use print() to display the message.";
            }
            break;

        case 2:
            // Module 2: Check if the code contains variable assignments
            if (code.includes("=")) {
                feedbackMessage = "Great! You correctly assigned values to variables.";
            } else {
                feedbackMessage = "Try again! Don't forget to use variables.";
            }
            break;

        // Add more cases for other levels
        default:
            feedbackMessage = "Keep going! You're doing great!";
    }

    displayFeedback(feedbackMessage);
}

// Function to display feedback message after checking code
function displayFeedback(message) {
    const output = document.getElementById('output');
    output.innerText = message;
}

// Example of a game-specific challenge for loops in Module 4
function treasureHuntChallenge(code) {
    // Check if code includes a loop (for/while)
    if (code.includes("for") || code.includes("while")) {
        displayFeedback("Great job! You used a loop to collect treasures.");
    } else {
        displayFeedback("Try again! Use a loop to collect all the treasures.");
    }
}

// Function to trigger the final challenge
function finalBossChallenge(code) {
    // Check if the code covers all major topics (loops, conditionals, functions, etc.)
    if (code.includes("def") && (code.includes("for") || code.includes("while"))) {
        displayFeedback("Awesome! You've used functions and loops correctly.");
    } else {
        displayFeedback("Oops! Make sure you're using functions and loops in your final code.");
    }
}
