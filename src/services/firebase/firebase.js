// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnfAVu1_TIJ-iI92AZOuRHGus-OOb2Yn4",
  authDomain: "my-project-97152-915d0.firebaseapp.com",
  projectId: "my-project-97152-915d0",
  storageBucket: "my-project-97152-915d0.appspot.com",
  messagingSenderId: "253224134094",
  appId: "1:253224134094:web:2ea4ab2d19666368dd379f",
  measurementId: "G-5320FFENTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    app, auth
};