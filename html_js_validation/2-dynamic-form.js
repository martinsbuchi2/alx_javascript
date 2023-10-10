document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dynamicForm");
    const inputContainer = document.getElementById("inputContainer");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    document.getElementById("numFields").addEventListener("change", function() {
        const numFields = parseInt(this.value);
        generateInputFields(numFields);
    });

    function generateInputFields(numFields) {
        inputContainer.innerHTML = "";
        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = `field${i}`;
            inputField.placeholder = `Field ${i}`;
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm() {
        const inputFields = document.querySelectorAll("#inputContainer input");
        let isValid = true;

        inputFields.forEach(function(inputField) {
            if (inputField.value.trim() === "") {
                isValid = false;
            }
        });

        if (isValid) {
            form.submit();
        } else {
            alert("Please fill in all fields.");
        }
    }
});
