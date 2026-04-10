// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your Firebase configuration (Use the values from your console)
const firebaseConfig = {
  apiKey: "AIzaSyA8EDFstmt0puE8lcTmX3o8HJpqPi61rT4",
  authDomain: "hey-neighbor-914.firebaseapp.com",
  projectId: "hey-neighbor-914",
  storageBucket: "hey-neighbor-914.firebasestorage.app",
  messagingSenderId: "864056883045",
  appId: "1:864056883045:web:20112101c7cc47fdc4938c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
