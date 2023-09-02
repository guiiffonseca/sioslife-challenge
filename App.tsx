import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/routes/Router';

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#0cc0df" />
      <Router />
    </>
  );
}

export default App;
