import React, { Component } from 'react';
import {
  Image, StatusBar, Text, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  ButtonLogin,
  TextButton,
  ContainerHeader,
  DataLogin,
  FormDataLogin,
  LoginText,
  LoginButtons,
  NewAccount,
  SignIn,
} from './styles';

import header from '../../assets/img/credilogo.png';

export class Login extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContainerHeader>
          <Image source={header} />
        </ContainerHeader>
        <DataLogin>
          <LoginText style={{ fontWeight: 'bold', fontSize: 20 }}>Login</LoginText>
          <LoginText>Faca seu login para prosseguir para o crediup</LoginText>
          <FormDataLogin>
            <TextInput
              placeholder="SEU CPF"
              placeholderTextColor="#063d54"
              style={{
                borderWidth: 1,
                marginHorizontal: 20,
                marginTop: 25,
                height: 40,
                borderRadius: 20,
                paddingLeft: 20,
                borderColor: '#063d54',
              }}
            />
            <TextInput
              placeholder="SENHA"
              placeholderTextColor="#063d54"
              style={{
                borderWidth: 1,
                marginHorizontal: 20,
                marginTop: 25,
                height: 40,
                borderRadius: 20,
                paddingLeft: 20,
                borderColor: '#063d54',
              }}
            />
            <Text
              style={{
                alignSelf: 'flex-end',
                marginRight: 30,
                marginTop: 25,
                color: '#063d54',
              }}
            >
              Esqueceu a Senha ?!
            </Text>
          </FormDataLogin>
        </DataLogin>
        <LoginButtons>
          <NewAccount>
            <Text style={{ color: '#063d54' }}>Nova Conta</Text>
          </NewAccount>
          <SignIn onPress={() => navigation.navigate('Tabs')}>
            <Text style={{ color: '#FFF' }}>Entrar</Text>
            <Icon size={20} color="#FFF" name="long-arrow-right" />
          </SignIn>
        </LoginButtons>
      </Container>
    );
  }
}

export default Login;
