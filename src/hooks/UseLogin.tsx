import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../services/firebaseConfing';
import AlertMessage from '../components/Alert';

export default function useLogin() {
  async function login(email: string, password: string) {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      AlertMessage('You are logged!', `You're user ID is ${data.user.uid}`);
    } catch (error) {
      AlertMessage('Error', 'Wrong email address or password');
    }
  }
  return {login};
}
