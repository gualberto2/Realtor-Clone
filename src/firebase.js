// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2Pb879lsHQVazBjrh3RzvUDB4v8-X_Y",
  authDomain: "react-clone-4a956.firebaseapp.com",
  projectId: "react-clone-4a956",
  storageBucket: "react-clone-4a956.appspot.com",
  messagingSenderId: "39808785674",
  appId: "1:39808785674:web:faa48b0004e33cbd372ef3",
  measurementId: "G-TPKVPP7DCX"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();