import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { bold } from 'ansi-colors';
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
    const { navigation } = this.props;
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
              <Text style={{ fontSize: 28, color: '#063d54', fontWeight: 'bold' }}> 800,00 </Text>
            </View>
          </LeftArea>
          <RightArea>
            <GenerateCard onPress={() => navigation.navigate('GenerateCard')}>
              <Text style={{ color: '#063d54' }}> Gerar </Text>
              <Text style={{ color: '#063d54' }}>Cartao Virtual</Text>
            </GenerateCard>
          </RightArea>
        </ContainerUserData>

        <ContainerOptions>
          <ButtonsActions>
            <Text style={{ color: '#FFF' }}>Gift Cards</Text>
          </ButtonsActions>
          <ButtonsActions>
            <Text style={{ color: '#FFF' }}>Comprovantes</Text>
          </ButtonsActions>
        </ContainerOptions>
      </Container>
    );
  }
}

export default Home;
