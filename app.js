// app.js

// Function to move to the next lesson (e.g., from Module 1 to Module 2)
function nextModule(moduleNumber) {
    // You can handle level transitions here
    const nextModuleUrl = `./module${moduleNumber}.html`;
    window.location.href = nextModuleUrl;
}

// Function to show a congratulatory message when a lesson is completed
function showCongrats(message) {
    alert(`Congratulations! ${message}`);
}

// Function to navigate back to the homepage (index.html)
function goHome() {
    window.location.href = 'index.html';
}


function completeChallenge() {
    window.location.href = '..';
}
