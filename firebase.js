
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhThO6iR48f6loaQU40yCiA1IGInq_ZZk",
    authDomain: "galoya-web-app.firebaseapp.com",
    projectId: "galoya-web-app",
    storageBucket: "galoya-web-app.firebasestorage.app",
    messagingSenderId: "272214790341",
    appId: "1:272214790341:web:4b7238b47d601a378da0ac",
    measurementId: "G-322L3R40GC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app); 

  export { db };
