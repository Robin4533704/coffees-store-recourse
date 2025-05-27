// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAd4y6l9rJZddDgdjxA31deLh15KkjuqyM",
  authDomain: "coffees-stors-app.firebaseapp.com",
  projectId: "coffees-stors-app",
  storageBucket: "coffees-stors-app.firebasestorage.app",
  messagingSenderId: "231514538088",
  appId: "1:231514538088:web:ef46040bfe9a29a801bbdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);