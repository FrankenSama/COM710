document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorSummary = document.getElementById('formErrors');

    form.addEventListener('submit', function(event) {
        // Clear previous errors
        clearErrors();
        
        // Validate form
        const isValid = validateForm();
        
        if (!isValid) {
            event.preventDefault();
            displayErrorSummary();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            displayError(name, 'nameError', 'Please enter your name');
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            displayError(email, 'emailError', 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            displayError(email, 'emailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate package selection
        const packageSelected = document.querySelector('input[name="package"]:checked');
        if (!packageSelected) {
            displayError(null, 'packageError', 'Please select a package');
            isValid = false;
        }

        // Validate owl fear level
        const scared = document.getElementById('scared');
        if (scared.value.trim() === '') {
            displayError(scared, 'scaredError', 'Please indicate how scared you are of owls');
            isValid = false;
        } else {
            const scaredValue = parseInt(scared.value);
            if (isNaN(scaredValue)) {
                displayError(scared, 'scaredError', 'Please enter a number');
                isValid = false;
            } else if (scaredValue < 1 || scaredValue > 10) {
                displayError(scared, 'scaredError', 'Please enter a number between 1 and 10');
                isValid = false;
            }
        }

        // Validate query
        const query = document.getElementById('query');
        if (query.value.trim() === '') {
            displayError(query, 'queryError', 'Please enter your query');
            isValid = false;
        }

        return isValid;
    }

    function displayError(field, errorId, message) {
        if (field) {
            field.classList.add('invalid');
        }
        document.getElementById(errorId).textContent = message;
    }

    function clearErrors() {
        // Remove invalid class from all fields
        const invalidFields = document.querySelectorAll('.invalid');
        invalidFields.forEach(field => {
            field.classList.remove('invalid');
        });

        // Clear all error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => {
            message.textContent = '';
        });

        // Hide error summary
        errorSummary.style.display = 'none';
        errorSummary.innerHTML = '';
    }

    function displayErrorSummary() {
        const errorMessages = [];
        const errorElements = document.querySelectorAll('.error-message');

        errorElements.forEach(element => {
            if (element.textContent !== '') {
                errorMessages.push(element.textContent);
            }
        });

        if (errorMessages.length > 0) {
            errorSummary.innerHTML = '<h3>Please correct the following errors:</h3><ul>' +
                errorMessages.map(msg => `<li>${msg}</li>`).join('') +
                '</ul>';
            errorSummary.style.display = 'block';
        }
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});