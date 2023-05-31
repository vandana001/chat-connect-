import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC7TGjpgkEPqs5bkd765qLEXTDLwdcY38s",
  authDomain: "chat-ff7c2.firebaseapp.com",
  projectId: "chat-ff7c2",
  storageBucket: "chat-ff7c2.appspot.com",
  messagingSenderId: "78666645236",
  appId: "1:78666645236:web:1273aae41c2a17289fa8a1",
  measurementId: "G-EDZL7H97MH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
