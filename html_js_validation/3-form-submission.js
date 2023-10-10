document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("submitForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const errorElement = document.getElementById("error");

        // Reset error message before performing validation
        errorElement.textContent = "";

        // Validate form fields
        if (name.trim() === "" || email.trim() === "") {
            errorElement.textContent = "Please fill in all required fields.";
        } else if (!validateEmail(email)) {
            errorElement.textContent = "Please enter a valid email address.";
        } else {
            // Validation passed, display success message
            errorElement.style.color = "green";
            errorElement.textContent = "Form submitted successfully!";
            // Perform form submission to server (You can add AJAX request here)
            // form.submit();
        }
    }

    function validateEmail(email) {
        // Regular expression for validating an Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
