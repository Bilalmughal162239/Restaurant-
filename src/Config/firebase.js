// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ZhUGRfImmYvDLZOzcAfXZd4q9wDVBgE",
  authDomain: "restaurant-47cea.firebaseapp.com",
  projectId: "restaurant-47cea",
  storageBucket: "restaurant-47cea.firebasestorage.app",
  messagingSenderId: "424024683093",
  appId: "1:424024683093:web:a2ab099fa0fb085e371adc",
  measurementId: "G-YCXJT82M8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
export {analytics , auth,firestore};