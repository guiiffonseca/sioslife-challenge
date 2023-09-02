import React from 'react';
import {Field} from 'formik';
import {Input} from './Input';
import {ContainerInput} from '../containers/ContainerInput';
import {ErrorMessage} from '../ErrorMessage';
import {FieldProps} from '../../model/FieldProps';

interface Props {
  value: string;
  onChangeText: (username: string) => void;
}

export default function Username({value, onChangeText}: Props) {
  function validateUsername(value: string) {
    let error: string = '';

    if (!value) error = 'Username is required';

    return error;
  }
  return (
    <Field validate={validateUsername} name="username">
      {({meta}: FieldProps) => (
        <ContainerInput>
          <Input
            id="username"
            placeholder="Username"
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
