import React from 'react';
import {LableBtn, SubmitBtn} from './styles';

type Props = {
  text: string;
  onPress: () => void;
};

export default function SubmitButton({onPress, text}: Props): JSX.Element {
  return (
    <SubmitBtn onPress={onPress}>
      <LableBtn>{text}</LableBtn>
    </SubmitBtn>
  );
}
