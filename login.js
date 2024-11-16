// const {initializeApp} = require("firebase/app");
// const {getAuth, createUserWithEmailAndPassword} = require("firebase/auth");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

//this is pulling the data from the .env file 
const firebaseConfig = {

  apiKey : process.env.API_KEY,

  authDomain : process.env.AUTH_DOMAIN,

  databaseURL : process.env.DATABASE_URL, 

  projectId : process.env.PROJECT_ID,

  storageBucket : process.env.STORAGE_BUCKET, 

  messagingSenderId : process.env.MESSAGING_SENDER_ID,

  appId : process.env.APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Sign in existing users
const loginForm = document.querySelector('.login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Signing in...")
    window.location.href = "auth-testing.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing in:', errorCode, errorMessage);
  });

    e.currentTarget.reset();
})


