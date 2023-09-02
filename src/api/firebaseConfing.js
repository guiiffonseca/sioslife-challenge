import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBsVJ0jGiESLgFakpkd0I2_2kwEvjZx2Os',
  authDomain: 'sioslife-challenfe.firebaseapp.com',
  projectId: 'sioslife-challenfe',
  storageBucket: 'sioslife-challenfe.appspot.com',
  messagingSenderId: '380051419919',
  appId: '1:380051419919:web:a0447b4b01f61589fe447a',
  measurementId: 'G-543Z0G6VS9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
