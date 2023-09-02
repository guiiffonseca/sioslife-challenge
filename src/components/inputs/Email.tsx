import React from 'react';
import {Field} from 'formik';
import {Input} from './Input';
import {ContainerInput} from '../containers/ContainerInput';
import {ErrorMessage} from '../ErrorMessage';
import {FieldProps} from '../../model/FieldProps';

interface Props {
  value: string;
  onChangeText: (email: string) => void;
}

export default function Email({value, onChangeText}: Props) {
  function validateUsername(emailValue: string) {
    const REGEX = /\S+@\S+\.\S+/;
    let error: string = '';

    if (!REGEX.test(emailValue)) {
      return (error = 'Invalid email');
    }
    if (!emailValue) {
      return (error = 'Email is required');
    }

    return error;
  }
  return (
    <Field validate={validateUsername} name="email">
      {({meta}: FieldProps) => (
        <ContainerInput>
          <Input
            id="email"
            placeholder="Email"
            value={value}
            active={value}
            error={meta.error}
            onChangeText={onChangeText}
          />
          {meta.error && meta.touched && (
            <ErrorMessage>{meta.error}</ErrorMessage>
          )}
        </ContainerInput>
      )}
    </Field>
  );
}
