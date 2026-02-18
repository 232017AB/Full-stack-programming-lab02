// ─── Calculate ────────────────────────────────────────────────────────────────
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var resultDiv = document.getElementById("result");

    // Input validation — check for empty / non-numeric inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "<p>⚠️ Please enter valid numbers in both fields.</p>";
        return;
    }

    // Division by zero guard
    if (operation === "divide" && num2 === 0) {
        resultDiv.innerHTML = "<p>⚠️ Division by zero is not allowed.</p>";
        return;
    }

    var result;

    // Perform the selected operation
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        result = num1 / num2;
    }

    // Build result message
    var operationSymbols = { add: "+", subtract: "−", multiply: "×", divide: "÷" };
    var symbol = operationSymbols[operation];

    var message = "<hr />";
    message += "<h2>Result: " + num1 + " " + symbol + " " + num2 + " = " + result + "</h2>";

    // Conditional message based on positive / negative / zero result
    if (result > 0) {
        message += "<p>✅ The result is a <strong>positive</strong> number.</p>";
    } else if (result < 0) {
        message += "<p>🔻 The result is a <strong>negative</strong> number.</p>";
    } else {
        message += "<p>⚪ The result is <strong>zero</strong>.</p>";
    }

    resultDiv.innerHTML = message;
}

// ─── Reset ────────────────────────────────────────────────────────────────────
function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").selectedIndex = 0;
    document.getElementById("result").innerHTML = "";
}
