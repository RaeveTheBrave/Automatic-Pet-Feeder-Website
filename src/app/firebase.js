import { initializeApp } from "firebase/app";

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