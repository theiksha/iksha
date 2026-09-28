import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDAEuqCempj7p5ZOy3MgT41_LdFignIY_U',
	authDomain: 'theikshaapp.firebaseapp.com',
	projectId: 'theikshaapp',
	storageBucket: 'theikshaapp.firebasestorage.app',
	messagingSenderId: '185742250537',
	appId: '1:185742250537:web:6830e7923dc1e5d5314238',
	measurementId: 'G-QCJ98Z0R2F'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
