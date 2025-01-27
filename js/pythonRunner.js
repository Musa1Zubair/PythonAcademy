// Function to get code from the CodeMirror editor (or from textarea in this case)
function getCode() {
    return document.getElementById("code-editor").value;
}

// Function to execute the Python code via Flask
function executeCode() {
    const code = getCode(); // Get the code from the textarea
    const outputElement = document.getElementById('output');
    
    // Ensure the code is not empty
    if (!code.trim()) {
        outputElement.innerHTML = "<p style='color: red;'>Please write some code first!</p>";
        return;
    }

    // Show executing message
    outputElement.innerHTML = "<p>Executing code...</p>";

    // Send the Python code to the Flask backend via a POST request
    fetch("/execute", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the output from the server
        outputElement.innerHTML = `<pre>${data.output}</pre>`;
    })
    .catch(error => {
        // Handle errors
        outputElement.innerHTML = `<p style="color: red;">Error: ${error.toString()}</p>`;
    });
}
