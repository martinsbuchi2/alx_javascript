document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validatePassword();
});

function validatePassword() {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (password.length < 8) {
        errorElement.textContent = "Password must be at least 8 characters long.";
    } else if (!uppercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one uppercase letter.";
    } else if (!lowercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one lowercase letter.";
    } else if (!digitRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one numeric digit.";
    } else if (!specialCharRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one special character (e.g., !@#$%^&*).";
    } else {
        //Password meets all criteria, allow form submission
        errorElement.textContent = "";
        document.getElementById("passwordForm").submit();
    }
}
