import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpTyKrH83dVsSJkXBMEFsac_J7kmPuWN4",
  authDomain: "movie-d03da.firebaseapp.com",
  projectId: "movie-d03da",
  storageBucket: "movie-d03da.appspot.com",
  messagingSenderId: "249948553687",
  appId: "1:249948553687:web:199fcba74b211f33698b92",
  measurementId: "G-47PCQETQW8"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
