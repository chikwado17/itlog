// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDI56pfHMUH0bGRcjP09gLFDNRdYFXIb2M",
  authDomain: "itlogger-c539a.firebaseapp.com",
  projectId: "itlogger-c539a",
  storageBucket: "itlogger-c539a.appspot.com",
  messagingSenderId: "438927448201",
  appId: "1:438927448201:web:e93580daed7c9e62b90e58",
  measurementId: "G-954PE5HR2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);