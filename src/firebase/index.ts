import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjyEPjDi9VP3Lp3mVsDAr3qP7GjOFcoHc",
  authDomain: "movie-a5ee2.firebaseapp.com",
  projectId: "movie-a5ee2",
  storageBucket: "movie-a5ee2.appspot.com",
  messagingSenderId: "1078995558267",
  appId: "1:1078995558267:web:8304ef116fe92d37d867de",
  measurementId: "G-YX51Y5XG5Y"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
