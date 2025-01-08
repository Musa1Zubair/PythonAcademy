from flask import Flask, request, jsonify
import sys
from io import StringIO

app = Flask(__name__)

@app.route("/execute", methods=["POST"])
def execute_code():
    user_code = request.json.get("code", "")
    
    # Redirect stdout to capture print statements
    old_stdout = sys.stdout
    sys.stdout = StringIO()
    
    try:
        exec(user_code)
        output = sys.stdout.getvalue()
    except Exception as e:
        output = str(e)
    
    sys.stdout = old_stdout
    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(debug=True)
