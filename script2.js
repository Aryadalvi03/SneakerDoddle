// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIqtuC7vsk5cM0G3NYr6qZeC5DurqBFnM",
    authDomain: "sneakerdoodle-900ba.firebaseapp.com",
    projectId: "sneakerdoodle-900ba",
    storageBucket: "sneakerdoodle-900ba.appspot.com",
    messagingSenderId: "116875379351",
    appId: "1:116875379351:web:db999a03fa86a74d5c5fd2",
    measurementId: "G-VHVX36KCBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const loginButton = document.getElementById("login-btn");

    errorMessage.textContent = ""; // Clear previous errors
    loginButton.textContent = "Logging in..."; // Show loading state
    loginButton.disabled = true; // Prevent multiple clicks

    // Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "index.html"; // Redirect after login
        })
        .catch((error) => {
            errorMessage.textContent = error.message; // Show error message
            loginButton.textContent = "Login"; // Reset button text
            loginButton.disabled = false;
        });
});

// Toggle Password Visibility
document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
});
