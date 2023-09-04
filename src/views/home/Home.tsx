import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Container} from '../../components/containers/Container';
import {Subtitle} from '../../components/Subtitle';
import SubmitButton from '../../components/buttons/SumitButton';

export default function Home(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<any>>();

  function handleLogout() {
    navigation.navigate('Login');
  }
  return (
    <Container style={{alignItems: 'center'}}>
      <Subtitle>You are logged!</Subtitle>
      <View style={{marginTop: 20, width: '100%'}}>
        <SubmitButton onPress={handleLogout} text="LOGOUT" />
      </View>
    </Container>
  );
}
