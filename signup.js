// const {initializeApp} = require("firebase/app");
// const {getAuth, createUserWithEmailAndPassword} = require("firebase/auth");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQthMiRyG7rs8x-bX-uaOgpOCwGxwDogk",
    authDomain: "syllabye-7f9b8.firebaseapp.com",
    databaseURL: "https://syllabye-7f9b8-default-rtdb.firebaseio.com",
    projectId: "syllabye-7f9b8",
    storageBucket: "syllabye-7f9b8.appspot.com",
    messagingSenderId: "914730272947",
    appId: "1:914730272947:web:cb70b9b64ab37d5d0fc8c6"
  };

// Show progress message
function showProgressMessage(message) {
  const progressMessage = document.getElementById("progressMessage");
  const progressText = document.getElementById("progressText");

  progressText.textContent = message; // Set the message text
  progressMessage.classList.remove("hidden"); // Show the message container
}

// Hide progress message
function hideProgressMessage() {
  const progressMessage = document.getElementById("progressMessage");
  progressMessage.classList.add("hidden"); // Hide the message container
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Sign up new users
const signupForm = document.querySelector('.signup');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    //alert("Creating Account...")
    showProgressMessage("Creating Account...");
    // Delay the redirect
    setTimeout(() => {
      hideProgressMessage(); // Hide the message before redirect
      window.location.href = "/auth-testing.html";
      console.log("User signed in:", user.email);
  }, 2000); // for 2 seconds
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing up:', errorCode, errorMessage);
    if (errorCode == "auth/email-already-in-use"){
      signupForm.querySelector('.error').innerHTML = "The email is already linked to another account."
    }
    else if (errorCode == "auth/weak-password"){
      signupForm.querySelector('.error').innerHTML = "Please try a stronger password."
    }
    else if (errorCode == "auth/invalid-email"){
      loginForm.querySelector('.error').innerHTML = "Invalid email. Please try again."
    }
    else if (errorCode == "auth/network-request-failed"){
      signupForm.querySelector('.error').innerHTML = "Network error. Please check your connection."
    }
    else{
      signupForm.querySelector('.error').innerHTML = "Sign up failed. Please try again."
    }
  });
    e.currentTarget.reset();
})

