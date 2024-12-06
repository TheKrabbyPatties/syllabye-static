import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Fetch Firebase config from the server
// async function fetchFirebaseConfig() {
//   const response = await fetch('/firebase-config');
//   if (!response.ok) {
//     throw new Error('Failed to fetch Firebase config');
//   }
//   return await response.json();
// }

// const firebaseConfig = {

//   apiKey : process.env.API_KEY,

//   authDomain : process.env.AUTH_DOMAIN,

//   databaseURL : process.env.DATABASE_URL, 

//   projectId : process.env.PROJECT_ID,

//   storageBucket : process.env.STORAGE_BUCKET, 

//   messagingSenderId : process.env.MESSAGING_SENDER_ID,

//   appId : process.env.APP_ID

// };

// // Fetch Firebase config from the server
// async function fetchFirebaseConfig() {
//   const response = await fetch('/firebase-config');
//   if (!response.ok) {
//     throw new Error('Failed to fetch Firebase config');
//   }
//   return await response.json();
// }

// Fetch and initialize Firebase
// fetchFirebaseConfig()
//   .then((config) => {
//     const app = initializeApp(config);  // Initialize Firebase with the config
//     const auth = getAuth(app);  // Get the auth instance with the initialized app

//     // Make auth reference 
//     const logout = document.querySelector(".logout-btn");  // Use querySelector with a class selector
//     if (logout) {  // Ensure the element exists
//         logout.addEventListener("click", (e) => {
//             e.preventDefault();
//             auth.signOut().then(() => {
//               alert("Logging you out...");
//               window.location.href = "login.html"; // Redirect to login page after sign out
//               console.log('User signed out');
//             }).catch((error) => {
//               console.error('Error signing out:', error);
//             });
//         });
//     } else {
//         console.error("Logout button not found");
//     }
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

// Logout 
const logout = document.querySelector(".logout-btn");  // Use querySelector with a class selector
if (logout) {  // Ensure the element exists
    logout.addEventListener("click", (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
          // alert("Logging you out...")
          showProgressMessage("Logging you out...");
          // Delay the redirect
          setTimeout(() => {
            hideProgressMessage(); // Hide the message before redirect
            window.location.href = "login.html"; // Redirect to the login page
            console.log("User signed out.");
        }, 5000); // for 5 seconds
        });
    });
} else {
    console.error("Error");
}



