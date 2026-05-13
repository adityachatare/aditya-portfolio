// Firebase configuration and Firestore initialization
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh6hHCDMWVKwl-Dd66JUTz79P7kYT9DXI",
  authDomain: "aditya-portfolio-a01b0.firebaseapp.com",
  projectId: "aditya-portfolio-a01b0",
  storageBucket: "aditya-portfolio-a01b0.firebasestorage.app",
  messagingSenderId: "740318681711",
  appId: "1:740318681711:web:6ea133dc704e5031f00b9a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
