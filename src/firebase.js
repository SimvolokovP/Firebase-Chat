import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBk7iLYbTX9iRNxJiat144DXpMqjJ7A5MU",
  authDomain: "react-auth-56b8d.firebaseapp.com",
  projectId: "react-auth-56b8d",
  storageBucket: "react-auth-56b8d.appspot.com",
  messagingSenderId: "213720667721",
  appId: "1:213720667721:web:696c01b04be2af6782d198",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseDB = getFirestore(app);