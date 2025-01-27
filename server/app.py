from flask import Flask, request, jsonify
import sys
import logging
from io import StringIO

app = Flask(__name__)

# Set up basic logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route("/execute", methods=["POST"])
def execute_code():
    user_code = request.json.get("code", "")
    
    if not user_code.strip():
        return jsonify({"output": "No code provided!"}), 400

    # Log the incoming request (for debugging purposes)
    logger.info("Executing code: %s", user_code[:50])  # Log only the first 50 characters for security
    
    # Redirect stdout to capture print statements
    old_stdout = sys.stdout
    sys.stdout = StringIO()

    # Create a limited global and local scope for security
    safe_globals = {"__builtins__": None}  # Prevent access to dangerous built-ins
    safe_locals = {}

    try:
        # Execute the Python code in a restricted environment
        exec(user_code, safe_globals, safe_locals)
        output = sys.stdout.getvalue()  # Capture the output from the executed code
    except Exception as e:
        output = f"Error: {str(e)}"  # Catch and return any exceptions as a string
    
    # Log the output for debugging
    logger.info("Code execution result: %s", output[:50])  # Log first 50 chars of output

    # Restore original stdout
    sys.stdout = old_stdout

    # Return the output as a JSON response
    return jsonify({"output": output})


if __name__ == "__main__":
    # Run the Flask app
    app.run(debug=True)
