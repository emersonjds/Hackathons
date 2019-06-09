import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  WhiteContainer,
  BlueContainer,
  UserContainer,
  ContainerPhoto,
  ContainerDataAccount,
  TotalLimtit,
  CurrentLimit,
  Separator,
  ContainerPoints,
  TextArea,
} from './styles';

import man from '../../../assets/img/man.png';
import api from '../../../services/api';

export class Profile extends Component {
  static navigationOptions = {
    title: 'MEUS GASTOS',
  };

  state = {
    data: [],
  };

  render() {
    return (
      <Container>
        <WhiteContainer />
        <BlueContainer>
          <UserContainer>
            <ContainerPhoto>
              <Image source={man} resizeMode="cover" />
            </ContainerPhoto>
            <Separator />
            <ContainerDataAccount>
              <TotalLimtit>
                <Text style={{ color: '#063d54' }}>Seu Limite Total</Text>
                <Text style={{ fontSize: 24, color: '#063d54' }}>R$ 1.600</Text>
              </TotalLimtit>
              <CurrentLimit>
                <Text style={{ color: '#063d54' }}>Seu Limite</Text>
                <Text style={{ fontSize: 24, color: '#063d54' }}>R$ 800</Text>
              </CurrentLimit>
            </ContainerDataAccount>
          </UserContainer>

          <ContainerPoints>
            <TextArea>
              <Text
                style={{
                  color: '#063d54',
                  alignSelf: 'center',
                  marginTop: 20,
                  fontSize: 20,
                }}
              >
                Meus Pontos: 16
              </Text>
            </TextArea>
            <TextArea style={{ marginTop: 160 }}>
              <Text
                style={{
                  color: '#063d54',
                  alignSelf: 'center',
                  marginTop: 20,
                  fontSize: 20,
                }}
              >
                Enviar Arquivos
              </Text>
              <Icon size={22} name="upload" color="#063d54" style={{ marginTop: 25 }} />
            </TextArea>
            <Text
              style={{
                color: '#063d54',
                alignSelf: 'center',
                marginTop: 10,
                fontSize: 15,
                marginHorizontal: 20,
              }}
            >
              Atualize com frequencia seus arquivos (nota fiscal com cpf, extrato bancario)
              lembre-se cada vez que voce atualiza seu limite pode aumentar =D
            </Text>
          </ContainerPoints>
        </BlueContainer>
      </Container>
    );
  }
}

export default Profile;
