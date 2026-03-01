// Firebase Configuration (Replace with your actual Firebase credentials)
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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Handle Sign-Up
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let birthDate = document.getElementById("birth-date").value;
    let place = document.getElementById("place").value;

    // Input validation
    if (fullName.length < 3) {
        alert("Full name must be at least 3 characters long.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Create User in Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log("User created:", user);

            // Save user details in Firebase Realtime Database
            database.ref('users/' + user.uid).set({
                fullName: fullName,
                email: email,
                phone: phone,
                birthDate: birthDate,
                place: place
            })
            .then(() => {
                alert("Sign Up Successful! Redirecting to Login...");
                window.location.href = "login.html"; // Redirect to login
            })
            .catch((error) => {
                console.error("Error saving user data:", error);
                alert("Error saving user data. Please try again.");
            });

        })
        .catch((error) => {
            console.error("Sign Up Error:", error);
            alert(error.message);
        });
});