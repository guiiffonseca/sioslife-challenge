import React from 'react';
import {Text, StatusBar} from 'react-native';

export default function Login(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#0cc0df" />
      <Text style={{fontSize: 30, fontFamily: 'Manrope-Light'}}>Login</Text>
    </>
  );
}
