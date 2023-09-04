import {Alert} from 'react-native';

export default function AlertMessage(title: string, text: string) {
  return Alert.alert(title, text, [{text: 'OK'}], {
    cancelable: false,
  });
}
