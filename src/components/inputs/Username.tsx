import React from 'react';
import {Input} from './Input';
import {ContainerInput} from '../containers/ContainerInput';

interface Props {
  value: string;
  onChangeText: () => void;
}

export default function Username({value, onChangeText}: Props) {
  return (
    <ContainerInput>
      <Input placeholder="Username" value={value} onChangeText={onChangeText} />
    </ContainerInput>
  );
}
