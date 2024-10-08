// Add event listener to login form
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

// Event listener for login form submission
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send login data to the server
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // On successful login, redirect to homepage or dashboard
            window.location.href = '/';
        } else {
            // If login failed, display the error message
            loginMessage.textContent = data.message || 'Invalid credentials';
            loginMessage.hidden = false;
        }
    } catch (error) {
        loginMessage.textContent = 'An error occurred. Please try again.';
        loginMessage.hidden = false;
    }
});
