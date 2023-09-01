import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../views/login/Login';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}
