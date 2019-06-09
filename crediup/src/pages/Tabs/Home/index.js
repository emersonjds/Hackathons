import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import {
  Container,
  CardArea,
  ContainerUserData,
  LeftArea,
  RightArea,
  GenerateCard,
  ContainerOptions,
  ButtonsActions,
} from './styles';
import card from '../../../assets/img/c_user.png';

export class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {};

  render() {
    return (
      <Container>
        <CardArea>
          <Image source={card} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
        </CardArea>
        <Divider style={{ backgroundColor: '#063d54' }} />

        <ContainerUserData>
          <LeftArea>
            <Text style={{ color: '#063d54' }}>Limite Disponivel / Ocultar</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>R$</Text>
              <Text style={{ fontSize: 28, color: '#063d54' }}> 800,00 </Text>
            </View>
          </LeftArea>
          <RightArea>
            <GenerateCard>
              <Text style={{ color: '#063d54' }}> Gerar </Text>
              <Text style={{ color: '#063d54' }}>Cartao Virtual</Text>
            </GenerateCard>
          </RightArea>
        </ContainerUserData>
        <Divider style={{ backgroundColor: '#063d54' }} />
        <ContainerOptions>
          <ButtonsActions>
            <Text>Indique aos amigos</Text>
          </ButtonsActions>
          <ButtonsActions>
            <Text>Gift Cards</Text>
          </ButtonsActions>
          <ButtonsActions>
            <Text>Comprovantes</Text>
          </ButtonsActions>
        </ContainerOptions>
      </Container>
    );
  }
}

export default Home;
