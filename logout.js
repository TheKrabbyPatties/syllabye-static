import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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

// Logout 
const logout = document.querySelector(".logout-btn");  // Use querySelector with a class selector
if (logout) {  // Ensure the element exists
    logout.addEventListener("click", (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
          alert("Logging you out...")
          window.location.href = "login.html";
          console.log('user signed out');
        });
    });
} else {
    console.error("Error");
}



