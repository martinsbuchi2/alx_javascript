document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorElement = document.getElementById("error");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateEmail();
    });

    function validateEmail() {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            // Email format is correct, allow form submission
            errorElement.textContent = "";
            form.submit();
        } else {
            // Email format is incorrect, display error message
            errorElement.textContent = "Please enter a valid email address.";
        }
    }
});
