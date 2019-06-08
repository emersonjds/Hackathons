import React, { Component } from 'react';
import { Container, ButtonLogin, TextButton } from './styles';

export class Login extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ButtonLogin>
          <TextButton onPress={() => navigation.navigate('Tabs')}>Login </TextButton>
        </ButtonLogin>
      </Container>
    );
  }
}

export default Login;
