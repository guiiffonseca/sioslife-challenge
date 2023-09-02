import styled from 'styled-components';
import {TextInput} from 'react-native';

type InputProps = {
  active?: string;
  error?: string;
};

export const Input = styled(TextInput)<InputProps>`
  width: 100%;
  height: 50px;
  padding: 15px;
  border-radius: 20px;
  border-width: 1.2px;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #494950;
  border-color: ${({error, active}) =>
    error ? '#DB4B3A' : '#9c9b9d' && active ? '#0cc0df' : '#9c9b9d'};
`;
