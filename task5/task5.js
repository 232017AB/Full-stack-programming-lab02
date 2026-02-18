// ─── Individual Validation Functions ─────────────────────────────────────────

function validateName(name) {
    if (name.trim() === "") {
        return "Name cannot be empty.";
    }
    return "";
}

function validateEmail(email) {
    if (email.trim() === "") {
        return "Email cannot be empty.";
    }
    if (email.indexOf("@") === -1) {
        return "Email must contain '@'.";
    }
    return "";
}

function validateAge(age) {
    var ageNum = parseInt(age);
    if (age.trim() === "" || isNaN(ageNum)) {
        return "Age cannot be empty.";
    }
    if (ageNum < 18 || ageNum > 60) {
        return "Age must be between 18 and 60.";
    }
    return "";
}

function validatePassword(password) {
    if (password.length === 0) {
        return "Password cannot be empty.";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters.";
    }
    return "";
}

// ─── Display / Clear Error in DOM ────────────────────────────────────────────

function showError(spanId, message) {
    var span = document.getElementById(spanId);
    span.textContent = message ? " ⚠ " + message : "";
}

// ─── Clear All Errors ─────────────────────────────────────────────────────────

function clearErrors() {
    showError("error-name", "");
    showError("error-email", "");
    showError("error-age", "");
    showError("error-password", "");
    document.getElementById("form-result").innerHTML = "";
}

// ─── Handle Form Submission ───────────────────────────────────────────────────

function handleSubmit(event) {
    event.preventDefault();

    clearErrors();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;

    // Run each validation function separately
    var nameError = validateName(name);
    var emailError = validateEmail(email);
    var ageError = validateAge(age);
    var passwordError = validatePassword(password);

    // Display errors dynamically in the DOM
    showError("error-name", nameError);
    showError("error-email", emailError);
    showError("error-age", ageError);
    showError("error-password", passwordError);

    // If any error exists, stop here
    if (nameError || emailError || ageError || passwordError) {
        document.getElementById("form-result").innerHTML =
            "<p>❌ Please fix the errors above before submitting.</p>";
        return false;
    }

    // All validations passed — ask for confirmation using confirm()
    var confirmed = confirm(
        "Ready to submit?\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Age: " + age
    );

    if (confirmed) {
        // Show success message in DOM
        document.getElementById("form-result").innerHTML =
            "<hr />" +
            "<h2>✅ Registration Successful!</h2>" +
            "<p>Welcome, <strong>" + name + "</strong>! Your account has been created.</p>";

        // Post-submission prompt for extra interaction
        var feedback = prompt("Thank you for registering, " + name + "! How did you hear about us?");

        if (feedback !== null && feedback.trim() !== "") {
            alert("Thanks for letting us know: \"" + feedback + "\". We appreciate your feedback!");
        } else {
            alert("No problem! Welcome aboard, " + name + "!");
        }

    } else {
        document.getElementById("form-result").innerHTML =
            "<p>⏸ Submission cancelled. You can review your details and try again.</p>";
    }

    return false;
}

// ─── Reset Form ───────────────────────────────────────────────────────────────

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("password").value = "";
    clearErrors();
}
