// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQNkTraa2Y0RIsB3OtCoR3TuFjAF5nRw",
  authDomain: "celulavirtual-101d8.firebaseapp.com",
  databaseURL: "https://celulavirtual-101d8-default-rtdb.firebaseio.com",
  projectId: "celulavirtual-101d8",
  storageBucket: "celulavirtual-101d8.firebasestorage.app",
  messagingSenderId: "290977504741",
  appId: "1:290977504741:web:919875eaebd26d3d2da30c",
  measurementId: "G-JNDE2QGCK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
