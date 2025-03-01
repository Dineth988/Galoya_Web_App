
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"; // 🔥 Import Firebase Auth
  import { addDoc, deleteDoc, collection } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


  import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } 
        from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
    import { getDatabase, ref, set, child, get} 
        from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
  
  import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
  import { getDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhThO6iR48f6loaQU40yCiA1IGInq_ZZk",
    authDomain: "galoya-web-app.firebaseapp.com",
    databaseURL: "galoya-web-app-default-rtdb.firebaseio.com/",
    projectId: "galoya-web-app",
    storageBucket: "gs://galoya-web-app.firebasestorage.app",
    messagingSenderId: "272214790341",
    appId: "1:272214790341:web:4b7238b47d601a378da0ac",
    measurementId: "G-322L3R40GC"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app); 
  const auth = getAuth(app);
  const database = getDatabase(app); // Realtime Database



  export { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } 
  export { getDatabase, ref, set, child, get} 


  export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc, app, addDoc, deleteDoc, collection, getFirestore , database };

 
