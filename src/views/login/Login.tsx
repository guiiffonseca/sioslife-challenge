import React from 'react';
import {Login as LoginModel} from '../../model/Login';
import {Container} from '../../components/containers/Container';
import {Row} from '../../components/Row';
import {Title} from '../../components/Title';
import LoginForm from './components/LoginForm';
import {Subtitle} from '../../components/Subtitle';

export default function Login(): JSX.Element {
  async function onSubmitLoginForm(values: LoginModel) {
    console.log(values);
  }
  return (
    <Container>
      <Row style={{marginBottom: 15}}>
        <Title>Login</Title>
      </Row>
      <Subtitle>Please login to you account</Subtitle>
      <LoginForm onSubmit={onSubmitLoginForm} />
    </Container>
  );
}
