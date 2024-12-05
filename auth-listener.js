import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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

// Fetch and initialize Firebase
// fetchFirebaseConfig()
//   .then((config) => {
//     const app = initializeApp(config);  // Initialize Firebase with the config
//     const auth = getAuth(app);  // Get the auth instance with the initialized app

//     // Monitor auth state changes
//     onAuthStateChanged(auth, (user) => {
//       if (window.location.pathname === '/auth-testing.html') {
//         const statusDisplay = document.getElementById('authStatus');

//         if (user) {
//           // User is signed in, update UI on dashboard
//           if (statusDisplay) {
//             console.log(`Logged in as ${user.email}`);
//             statusDisplay.textContent = `Logged in as ${user.email}`;
//           }
//         } else {
//           // User is signed out or not available, redirect
//           window.location.href = "/login.html";
//         }
//       }
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

onAuthStateChanged(auth, (user) => {
    if (window.location.pathname === '/auth-testing.html') {
        const statusDisplay = document.getElementById('authStatus');
    
        if (user) {
          // User is signed in, update UI on dashboard
          if (statusDisplay) {
            console.log(`Logged in as ${user.email}`)
            statusDisplay.textContent = `Logged in as ${user.email}`;
          }
        } else {
          // User is signed out or not available, redirect
          window.location.href = "/login.html";
        }
      }
    });