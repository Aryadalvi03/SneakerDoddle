// Function to register a new user
function register() {
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (email && password) {
        localStorage.setItem(email, password);
        document.getElementById("message").innerHTML = "User registered successfully!";
    } else {
        document.getElementById("message").innerHTML = "Please enter valid details.";
    }
}

// Function to login
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
        document.getElementById("message").innerHTML = "Login successful!";
        window.location.href = "dashboard.html";  // Redirect to Dashboard
    } else {
        document.getElementById("message").innerHTML = "Invalid email or password!";
    }
}
