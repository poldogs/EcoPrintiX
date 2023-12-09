// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "ecoweb-project.firebaseapp.com",
  projectId: "ecoweb-project",
  storageBucket: "ecoweb-project.appspot.com",
  messagingSenderId: "420432965885",
  appId: "1:420432965885:web:fac565f75f6c9b58b8ce94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);