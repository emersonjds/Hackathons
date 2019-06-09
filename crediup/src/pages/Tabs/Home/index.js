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
        <Divider style={{ backgroundColor: 'blue' }} />

        <ContainerUserData>
          <LeftArea>
            <Text style={{ color: 'blue' }}>Limite Disponivel / Ocultar</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>R$</Text>
              <Text style={{ fontSize: 28, color: 'blue' }}> 800,00 </Text>
            </View>
          </LeftArea>
          <RightArea>
            <GenerateCard>
              <Text style={{ color: 'blue' }}> Gerar </Text>
              <Text style={{ color: 'blue' }}>Cartao Virtual</Text>
            </GenerateCard>
          </RightArea>
        </ContainerUserData>
        <Divider style={{ backgroundColor: 'blue' }} />
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
