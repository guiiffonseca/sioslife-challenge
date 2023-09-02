import React from 'react';
import {Login as LoginModel} from '../../model/Login';
import {Container} from '../../components/containers/Container';
import {Row} from '../../components/Row';
import {Title} from '../../components/Title';
import LoginForm from './components/LoginForm';
import {Subtitle} from '../../components/Subtitle';
import useLogin from '../../hooks/UseLogin';

export default function Login(): JSX.Element {
  const {login} = useLogin();

  async function onSubmitLoginForm(values: LoginModel) {
    await login(values.email, values.password);
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
