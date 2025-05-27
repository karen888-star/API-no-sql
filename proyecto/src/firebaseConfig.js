import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyC4gnXGBu4DYmeaxLeE0Xmu6IuDyciyK_s",
  authDomain: "harrypoterapi.firebaseapp.com",
  projectId: "harrypoterapi",
  storageBucket: "harrypoterapi.firebasestorage.app",
  messagingSenderId: "1089078510369",
  appId: "1:1089078510369:web:c72af065fed7505001f460",
  measurementId: "G-JB7ZHJBY2F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };