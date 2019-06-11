import React, { Component } from 'react';
import {
  Text, View, Image, ActivityIndicator,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
  BoxBuy,
  ProductDetails,
  PriceProduct,
} from './styles';

import man from '../../../assets/img/man.png';
import api from '../../../services/api';

export class Extract extends Component {
  static navigationOptions = {
    title: 'MEUS GASTOS',
  };

  state = {
    data: [],
  };

  async componentDidMount() {
    const response = await api.get('/billing/5cfbf5148c6d4b307bc51e36');
    this.setState({
      data: response.data,
    });
    console.log('return', this.state.data);
  }

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
                <Text style={{ color: '#FFF' }}>Seu Limite Total</Text>
                <Text style={{ fontSize: 24, color: '#FFF', fontWeight: 'bold' }}>R$ 1.600</Text>
              </TotalLimtit>
              <CurrentLimit>
                <Text style={{ color: '#FFF' }}>Limite Disponivel</Text>
                <Text style={{ fontSize: 24, color: '#FFF', fontWeight: 'bold' }}>R$ 800</Text>
              </CurrentLimit>
            </ContainerDataAccount>
          </UserContainer>
          <ScrollView style={{ top: 180, marginHorizontal: 20 }}>
            {!this.state.data ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              this.state.data.map(ultimaCompra => (
                <BoxBuy key={ultimaCompra._id}>
                  <ProductDetails>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{ultimaCompra.seller}</Text>
                  </ProductDetails>
                  <PriceProduct>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                      {' '}
                      - R$
                      {ultimaCompra.value}
                    </Text>
                    {/* <Text style={{ fontSize: 10, color: '#FFF' }}>CARTÃO</Text> */}
                  </PriceProduct>
                </BoxBuy>
              ))
            )}
          </ScrollView>
        </BlueContainer>
      </Container>
    );
  }
}

export default Extract;
