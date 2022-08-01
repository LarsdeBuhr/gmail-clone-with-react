import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAfKQnlQgEQ9s8JNPzrYM6OUUeiV5Dyt0g",
   authDomain: "clone-1074c.firebaseapp.com",
   projectId: "clone-1074c",
   storageBucket: "clone-1074c.appspot.com",
   messagingSenderId: "852532918097",
   appId: "1:852532918097:web:f23f64aba699791a784570",
   measurementId: "G-LMWG75N8VK"
 };

 const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

 export {db, auth, provider};