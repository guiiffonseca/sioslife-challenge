import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../services/firebaseConfing';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import AlertMessage from '../components/Alert';

export default function useLogin() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  async function login(email: string, password: string) {
    try {
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      user && navigation.navigate('Home');
    } catch (error) {
      AlertMessage(
        'Ops!',
        'Something went wrong. Please, check your email address and your password',
      );
    }
  }
  return {login};
}
