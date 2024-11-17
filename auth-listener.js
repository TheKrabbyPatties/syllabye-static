import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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