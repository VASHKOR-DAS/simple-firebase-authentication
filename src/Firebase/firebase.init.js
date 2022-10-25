// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqegWVUmcFyCL_U2Ut-ghGqgn341Rg8Z0",
  authDomain: "simple-firebase-authenti-bee57.firebaseapp.com",
  projectId: "simple-firebase-authenti-bee57",
  storageBucket: "simple-firebase-authenti-bee57.appspot.com",
  messagingSenderId: "683330729724",
  appId: "1:683330729724:web:714bffea6c320309d34979",
  measurementId: "G-9W7QZ9PVME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;