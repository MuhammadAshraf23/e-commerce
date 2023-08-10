 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 import { getFirestore   } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDRp9LuhgaArCG__HtwQ97j2BzwJ2TuC7U",
   authDomain: "login-signup-update-and-logout.firebaseapp.com",
   projectId: "login-signup-update-and-logout",
   storageBucket: "login-signup-update-and-logout.appspot.com",
   messagingSenderId: "482994665633",
   appId: "1:482994665633:web:3d2a25905a4b24cf06d8e0",
   measurementId: "G-ZF8FQ89YV7"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
 // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)