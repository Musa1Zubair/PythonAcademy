// codeEditor.js

// Initialize CodeMirror editor for Python code
const editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    mode: "python",               // Set mode to Python for syntax highlighting
    lineNumbers: true,            // Show line numbers
    matchBrackets: true,          // Highlight matching brackets
    theme: "default",             // Set theme for the editor (default theme)
    tabSize: 4,                   // Number of spaces for tab
    indentUnit: 4,                // Indentation size
    lineWrapping: true,           // Allow line wrapping for long lines of code
});

// Function to retrieve the code from the editor
function getCode() {
    return editor.getValue();  // Get the code typed in the editor
}

// Function to clear the editor content
function clearEditor() {
    editor.setValue('');  // Clear the editor
}
