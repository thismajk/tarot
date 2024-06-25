// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOaoA75w0d8xj11EtPqtr_JaYGKeL1Srw",
  authDomain: "tarot-37626.firebaseapp.com",
  projectId: "tarot-37626",
  storageBucket: "tarot-37626.appspot.com",
  messagingSenderId: "318699580955",
  appId: "1:318699580955:web:b651e2988147470bc052be",
  measurementId: "G-EB87F9XX7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);