// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4gnXGBu4DYmeaxLeE0Xmu6IuDyciyK_s",
  authDomain: "harrypoterapi.firebaseapp.com",
  projectId: "harrypoterapi",
  storageBucket: "harrypoterapi.appspot.com", // 🔧 corregido aquí
  messagingSenderId: "1089078510369",
  appId: "1:1089078510369:web:c72af065fed7505001f460",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
