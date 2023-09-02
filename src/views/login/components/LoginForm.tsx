import React from 'react';
import {Formik} from 'formik';
import {Login} from '../../../model/Login';
import {View} from 'react-native';
import Username from '../../../components/inputs/Username';
import Password from '../../../components/inputs/Password';
import SubmitButton from '../../../components/buttons/SumitButton';

export default function LoginForm() {
  const INITIAL_VALUES = {username: '', password: ''} as Login;

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={() => console.log('FORMIK')}>
      {({values, handleChange, handleSubmit, setFieldValue}) => (
        <View style={{marginTop: 20}}>
          <Username
            value={values.username}
            onChangeText={(e: string) => setFieldValue('username', e)}
          />
          <Password
            value={values.password}
            onChangeText={handleChange('password')}
          />
          <View style={{marginTop: 30}}>
            <SubmitButton text="LOGIN" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
    // <SubmitButton text="LOGIN" onPress={() => console.log('deudeu')} />
  );
}
