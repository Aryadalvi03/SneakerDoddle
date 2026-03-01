// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIaq58NOs2uzDpTGGwl3K6Yv0aoDDi8rg",
  authDomain: "sneakerdoodle-b340a.firebaseapp.com",
  projectId: "sneakerdoodle-b340a",
  storageBucket: "sneakerdoodle-b340a.firebasestorage.app",
  messagingSenderId: "936731577890",
  appId: "1:936731577890:web:574fbb1770818ee101847b",
  measurementId: "G-C7YB7HBP40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);