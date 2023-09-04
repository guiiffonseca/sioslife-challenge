import React from 'react';
import {Field} from 'formik';
import {ContainerInput} from '../containers/ContainerInput';
import {Input} from './Input';
import {ErrorMessage} from '../ErrorMessage';
import {FieldProps} from '../../model/FieldProps';

interface Props {
  value: string;
  onChangeText: (password: string) => void;
}

export default function Password({value, onChangeText}: Props) {
  function validatePassword(value: string) {
    let error: string = '';

    if (!value) error = 'Password is required';

    return error;
  }
  return (
    <Field validate={validatePassword} name="password">
      {({meta}: FieldProps) => (
        <ContainerInput>
          <Input
            placeholder="Password"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={true}
            active={value}
            error={meta.error && meta.touched}
          />
          {meta.error && meta.touched && (
            <ErrorMessage>{meta.error}</ErrorMessage>
          )}
        </ContainerInput>
      )}
    </Field>
  );
}
