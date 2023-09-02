import React from 'react';
import {Formik} from 'formik';
import {Login} from '../../../model/Login';
import {View} from 'react-native';
import Email from '../../../components/inputs/Email';
import Password from '../../../components/inputs/Password';
import SubmitButton from '../../../components/buttons/SumitButton';

export default function LoginForm() {
  const INITIAL_VALUES = {email: '', password: ''} as Login;

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={() => console.log('FORMIK')}>
      {({values, handleSubmit, setFieldValue}) => (
        <View style={{marginTop: 20}}>
          <Email
            value={values.email}
            onChangeText={(e: string) => setFieldValue('email', e)}
          />
          <Password
            value={values.password}
            onChangeText={(e: string) => setFieldValue('password', e)}
          />
          <View style={{marginTop: 30}}>
            <SubmitButton text="LOGIN" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
}
