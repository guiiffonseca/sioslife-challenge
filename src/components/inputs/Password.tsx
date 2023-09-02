import React from 'react';
import {ContainerInput} from '../containers/ContainerInput';
import {Input} from './Input';

interface Props {
  value: string;
  onChangeText: () => void;
}

export default function Password({value, onChangeText}: Props) {
  return (
    <ContainerInput>
      <Input
        placeholder="Password"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={true}
      />
    </ContainerInput>
  );
}
