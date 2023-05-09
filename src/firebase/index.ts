import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgQlJGVqfAfU_cZMK7ZqTNkymn5r9wjoQ",
  authDomain: "movie-apps-be03c.firebaseapp.com",
  projectId: "movie-apps-be03c",
  storageBucket: "movie-apps-be03c.appspot.com",
  messagingSenderId: "469126757728",
  appId: "1:469126757728:web:f642c13638b48b38c97205",
  measurementId: "G-87NW61Y8C7"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
