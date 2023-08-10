import { auth,app,db } from "./firebase.mjs"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { doc, setDoc   } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const btn =document.getElementById('signup-btn')
btn.addEventListener('click', ()=>{
    const name= document.getElementById('name').value
const email= document.getElementById('email').value
const password= document.getElementById('psw').value
const address= document.getElementById('address').value

const userdata={
    name:name,
    email:email,
    password:password,
    address:address,
}

createUserWithEmailAndPassword(auth, email, password)
.then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    try {
        const docRef = await setDoc(doc(db, "users", user.uid),{

            
            ...userdata,
           user:user.uid
            
        } 
        );
        console.log("Document written with ID: ", user.uid);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    console.log(user);
    alert("Sign Up Succesful")
    window.location.href='./login.html'
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});
})





