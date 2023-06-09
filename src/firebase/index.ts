import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCQw6yUUfQhSbhCngW2WpyjU2tnacXFon8',
	authDomain: 'movie-2c4e5.firebaseapp.com',
	projectId: 'movie-2c4e5',
	storageBucket: 'movie-2c4e5.appspot.com',
	messagingSenderId: '1063049801387',
	appId: '1:1063049801387:web:cbe69705458731c49751ee',
	measurementId: 'G-63G2LR5EB7',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
