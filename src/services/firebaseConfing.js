import {initializeApp} from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBsVJ0jGiESLgFakpkd0I2_2kwEvjZx2Os',
  authDomain: 'sioslife-challenfe.firebaseapp.com',
  databaseURL: 'https://sioslife-challenfe-default-rtdb.firebaseio.com',
  projectId: 'sioslife-challenfe',
  storageBucket: 'sioslife-challenfe.appspot.com',
  messagingSenderId: '380051419919',
  appId: '1:380051419919:web:a0447b4b01f61589fe447a',
  measurementId: 'G-543Z0G6VS9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const auth = getAuth(app);
