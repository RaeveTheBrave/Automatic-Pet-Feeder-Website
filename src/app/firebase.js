// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoTinVckCB-Fyp0roR2uPPoYbJkQPhKlU",
  authDomain: "automatic-pet-feeder-a7b08.firebaseapp.com",
  databaseURL: "https://automatic-pet-feeder-a7b08-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "automatic-pet-feeder-a7b08",
  storageBucket: "automatic-pet-feeder-a7b08.firebasestorage.app",
  messagingSenderId: "434174597231",
  appId: "1:434174597231:web:73927f0e9275b1aeadd59a",
  measurementId: "G-Z4PW0R3JWH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);