import { auth,app } from "./firebase.mjs"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const signin =document.getElementById('signin-btn')
signin.addEventListener('click', ()=>{
    const email= document.getElementById('email').value
    const password= document.getElementById('psw').value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    alert("login Successful")
    console.log(user)
    window.location.href='./dashBoard.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})