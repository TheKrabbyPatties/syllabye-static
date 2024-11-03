import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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



