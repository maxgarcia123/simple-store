import 'firebase/storage';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBLEQ4fcuhTRnsTihQ584ZNyvQQwXNrAfc',
  authDomain: 'simple-store-56407.firebaseapp.com',
  projectId: 'simple-store-56407',
  storageBucket: 'simple-store-56407.appspot.com',
  messagingSenderId: '569115202381',
  appId: '1:569115202381:web:7e63842d1a66585934dd04',
  measurementId: 'G-09V6B2XLQ7',
};

const app = initializeApp(firebaseConfig);
export default app;
