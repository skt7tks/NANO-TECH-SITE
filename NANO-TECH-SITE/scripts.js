
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var eyeIcon = passwordInput.nextElementSibling;
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
        eyeIcon.innerHTML = "&#128064;"; 
    } else {
        passwordInput.type = "password"; 
        eyeIcon.innerHTML = "&#128065;"; 
    }
}


// Function to toggle password visibility
function togglePasswordVisibility(id) {
    var passwordField = document.getElementById(id);
    var fieldType = passwordField.type;
    

    if (fieldType === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}


function validatePassword() {
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.classList.remove('show');
    
    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match. Please try again.";
        errorMessage.classList.add('show');
    } else {
        window.location.href = "login.html"; 
    }
}

function togglePasswordVisibility(id) {
    var passwordField = document.getElementById(id);
    var type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
}





