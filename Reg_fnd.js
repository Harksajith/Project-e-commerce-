// Add event listener to register form
const registerForm = document.getElementById('register-form');
const registerMessage = document.getElementById('register-message');

// Event listener for register form submission
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send registration data to the server
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // On successful registration, redirect to login page or show success message
            window.location.href = '/login.html';
        } else {
            // If registration failed, display the error message
            registerMessage.textContent = data.message || 'Registration failed';
            registerMessage.hidden = false;
        }
    } catch (error) {
        registerMessage.textContent = 'An error occurred. Please try again.';
        registerMessage.hidden = false;
    }
});
