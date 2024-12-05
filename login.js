// const {initializeApp} = require("firebase/app");
// const {getAuth, createUserWithEmailAndPassword} = require("firebase/auth");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Fetch Firebase config from the server
// async function fetchFirebaseConfig() {
//   const response = await fetch('/firebase-config');
//   if (!response.ok) {
//     throw new Error('Failed to fetch Firebase config');
//   }
//   return await response.json();
// }

//this is pulling the data from the .env file 
// const firebaseConfig = {

//   apiKey : process.env.API_KEY,

//   authDomain : process.env.AUTH_DOMAIN,

//   databaseURL : process.env.DATABASE_URL, 

//   projectId : process.env.PROJECT_ID,

//   storageBucket : process.env.STORAGE_BUCKET, 

//   messagingSenderId : process.env.MESSAGING_SENDER_ID,

//   appId : process.env.APP_ID

// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Fetch and initialize Firebase
// fetchFirebaseConfig()
//   .then((config) => {
//     const app = initializeApp(config);  // Initialize Firebase with the config
//     const auth = getAuth(app);  // Get the auth instance with the initialized app

//     // Sign in existing users
//     const loginForm = document.querySelector('.login');

//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;

//         console.log('Email:', email);
//         console.log('Password:', password);

//         // Perform Firebase authentication
//         signInWithEmailAndPassword(auth, email, password)
//           .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             alert("Signing in...");
//             window.location.href = "auth-testing.html"; // Redirect on successful sign-in
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error('Error signing in:', errorCode, errorMessage);
//           });

//         e.currentTarget.reset(); // Reset the form after submission
//     });
//   })
//   .catch((error) => {
//     console.error('Error initializing Firebase:', error);
//   });

// Firebase configuration
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

// Make auth reference 
const auth = getAuth();

// Sign in existing users
const loginForm = document.querySelector('.login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

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


