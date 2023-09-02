import React from 'react';
import {Container} from '../../components/containers/Container';
import {Row} from '../../components/Row';
import {Title} from '../../components/Title';
import {Subtitle} from '../../components/Subtitle';
import LoginForm from './components/LoginForm';

export default function Login(): JSX.Element {
  return (
    <Container>
      <Row style={{marginBottom: 15}}>
        <Title>Login</Title>
      </Row>
      <Subtitle>Please login to you account</Subtitle>
      <LoginForm />
    </Container>
  );
}
