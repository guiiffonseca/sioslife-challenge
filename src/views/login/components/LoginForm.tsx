import React from 'react';
import {View} from 'react-native';
import Username from '../../../components/inputs/Username';
import Password from '../../../components/inputs/Password';
import SubmitButton from '../../../components/buttons/SumitButton';

export default function LoginForm() {
  return (
    <View style={{marginTop: 20}}>
      <Username value="" onChangeText={() => console.log('user')} />
      <Password value="" onChangeText={() => console.log('password')} />
      <View style={{marginTop: 30}}>
        <SubmitButton text="LOGIN" onPress={() => console.log('logou')} />
      </View>
    </View>
  );
}
