// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqTs-aWGvQ6GAnk0dpH-P9mJy3qIvCRLM",
  authDomain: "pharmatech-solutions.firebaseapp.com",
  projectId: "pharmatech-solutions",
  storageBucket: "pharmatech-solutions.appspot.com",
  messagingSenderId: "319949247725",
  appId: "1:319949247725:web:f80028c480c5279bea28e4",
  measurementId: "G-YRE8FSPR22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);