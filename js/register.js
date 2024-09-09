document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
    if (name === '') {
        showError('name-error', 'Name is required');
        isValid = false;
    } else if (name.length < 2 || name.length > 50) {
        showError('name-error', 'Name must be between 2 and 50 characters');
        isValid = false;
    } else if (!nameRegex.test(name)) {
        showError('name-error', 'Name can only contain letters and spaces');
        isValid = false;
    }

   
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if (email === '') {
        showError('email-error', 'Email is required');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email-error', 'Invalid email format');
        isValid = false;
    }

   
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (password === '') {
        showError('password-error', 'Password is required');
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        showError('password-error', 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character');
        isValid = false;
    }

  
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        showError('confirm-password-error', 'Passwords do not match');
        isValid = false;
    }

    
    if (isValid) {
        const userData = {
            name: sanitizeInput(name),
            email: sanitizeInput(email),
            password: sanitizeInput(password) 
        };

        const userDataJSON = JSON.stringify(userData);
        localStorage.setItem('userData', userDataJSON);
        window.location.href = './../pages/user-data.html'; 
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.color = '#FF6064'; 
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}


function sanitizeInput(input) {
    const tempElement = document.createElement('div');
    tempElement.textContent = input;
    return tempElement.innerHTML;
}

document.getElementById('goBackBtn').addEventListener('click', function() {
    window.location.href = './../pages/login.html'; // Caminho para a página de login
});

