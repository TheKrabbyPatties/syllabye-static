// const {initializeApp} = require("firebase/app");
// const {getAuth, createUserWithEmailAndPassword} = require("firebase/auth");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
      // alert("Signing in...")
      showProgressMessage("Logging you in...");
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
      console.error('Error signing in:', errorCode, errorMessage);
      if (errorCode == "auth/invalid-login-credentials"){
        loginForm.querySelector('.error').innerHTML = "Invalid email or password. Please try again."
      }
      else if (errorCode == "auth/invalid-email"){
        loginForm.querySelector('.error').innerHTML = "Invalid email. Please try again."
      }
      else if (errorCode == "auth/network-request-failed"){
        loginForm.querySelector('.error').innerHTML = "Network error. Please check your connection."
      }
      else{
        loginForm.querySelector('.error').innerHTML = "Login failed. Please try again."
      }
    });
      e.currentTarget.reset();
  })

// Sign in with Google
const googleSignInButton = document.getElementById("googleSignIn");

googleSignInButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;

          console.log("User signed in with Google:", user);
          showProgressMessage("Logging you in...");
          //alert("Signing in...")
          // Delay the redirect
          setTimeout(() => {
            hideProgressMessage(); // Hide the message before redirect
            window.location.href = "/auth-testing.html";
            console.log("User signed in.");
        }, 2000); // for 2 seconds
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.error("Error signing in with Google:", errorCode, errorMessage);

            // Display error messages
            if (errorCode === 'auth/popup-closed-by-user') {
              loginForm.querySelector('.google-error').innerHTML = "Sign-in cancelled. Please try again."
              // alert("Sign-in cancelled. Please try again.");
            } else if (errorCode === 'auth/network-request-failed') {
              loginForm.querySelector('.google-error').innerHTML = "Network error. Please check your connection."
              // alert("Network error. Please check your connection and try again.");
            } else {
              loginForm.querySelector('.google-error').innerHTML = "Google sign-in failed. Please try again."
              // alert("Google sign-in failed. Please try again.");
            }
        });
});


  // Reset password
const reset = document.getElementById("reset");
reset.addEventListener("click", function(e){
  e.preventDefault()
  const email = document.getElementById('email').value;
  
  sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent!")
  })
  . catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error:', errorCode, errorMessage);
    if (errorCode == "auth/missing-email"){
      loginForm.querySelector('.error').innerHTML = "Please enter your email."
    }
  });
})



