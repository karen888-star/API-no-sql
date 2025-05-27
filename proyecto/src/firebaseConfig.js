// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4gnXGBu4DYmeaxLeE0Xmu6IuDyciyK_s",
  authDomain: "harrypoterapi.firebaseapp.com",
  projectId: "harrypoterapi",
  storageBucket: "harrypoterapi.firebasestorage.app",
  messagingSenderId: "1089078510369",
  appId: "1:1089078510369:web:c72af065fed7505001f460",
  measurementId: "G-JB7ZHJBY2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
