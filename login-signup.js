// const {initializeApp} = require("firebase/app");
// const {getAuth, createUserWithEmailAndPassword} = require("firebase/auth");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQthMiRyG7rs8x-bX-uaOgpOCwGxwDogk",
    authDomain: "syllabye-7f9b8.firebaseapp.com",
    databaseURL: "https://syllabye-7f9b8-default-rtdb.firebaseio.com",
    projectId: "syllabye-7f9b8",
    storageBucket: "syllabye-7f9b8.appspot.com",
    messagingSenderId: "914730272947",
    appId: "1:914730272947:web:cb70b9b64ab37d5d0fc8c6"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const form = document.querySelector('.login-signup');

form.addEventListener('submit', (e) => {
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
    alert("Creating Account...")
    window.location.href = "index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing up:', errorCode, errorMessage);
    // ..
  });
    e.currentTarget.reset();
})


//auth.onAuthStateChanged(user => {
//    if (user) {
//      console.log('User is signed in:', user);
//    } else {
//      console.log('No user signed in');
//    }
//  });
  