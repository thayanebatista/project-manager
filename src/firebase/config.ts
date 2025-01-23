import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDlfFAVWujN-Uh5dIIq4JafUyKypmmO9U8',
  authDomain: 'fisrtfb-f1118.firebaseapp.com',
  projectId: 'fisrtfb-f1118',
  storageBucket: 'fisrtfb-f1118.firebasestorage.app',
  messagingSenderId: '720649823858',
  appId: '1:720649823858:web:222b4c34d37c90b34244eb',
  measurementId: 'G-F96CFWTQWC',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
