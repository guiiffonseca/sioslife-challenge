import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../services/firebaseConfing';
import AlertMessage from '../components/Alert';

export default function useLogin() {
  async function login(email: string, password: string) {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      AlertMessage('You are logged!', `Your user ID is ${data.user.uid}`);
      console.log(data);
    } catch (error) {
      AlertMessage(
        'Ops!',
        'Something went wrong. Please, check your email address and your password',
      );
    }
  }
  return {login};
}
