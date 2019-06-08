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
              <Text style={{ color: 'blue' }}>R$</Text>

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
        <ContainerUserData />
      </Container>
    );
  }
}

export default Home;
