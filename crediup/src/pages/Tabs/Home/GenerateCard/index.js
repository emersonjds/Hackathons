import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
  Container,
  Title,
  Card,
  LineOne,
  ImageLogo,
  TextGold,
  SecondLine,
  Thirdline,
  FourLine,
  CardNumber,
  IconeMaster,
  GenerateNewNumber,
  ContainerAlert,
} from './styles';

import logo from '../../../../assets/img/credilogo.png';
import master from '../../../../assets/img/master.png';

export class GenerateCard extends Component {
  static navigationOptions = {
    title: 'CARTAO VIRTUAL',
  };

  state = {};

  render() {
    return (
      <Container>
        <Title> Gerar Cartão Digital</Title>
        <Card>
          <LineOne>
            <ImageLogo>
              <Image source={logo} resizeMode="contain" style={{ height: 40 }} />
            </ImageLogo>
            <TextGold>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  bottom: 10,
                  color: '#FFF',
                  marginRight: 10,
                }}
              >
                Gold
              </Text>
            </TextGold>
          </LineOne>
          <SecondLine>
            <CardNumber>1234</CardNumber>
            <CardNumber>1234</CardNumber>
            <CardNumber>1234</CardNumber>
            <CardNumber>1234</CardNumber>
          </SecondLine>
          <Thirdline>
            <Text style={{ color: 'silver' }}>CCV</Text>
            <CardNumber>****</CardNumber>
            <Text style={{ color: 'silver' }}>DATA EXP</Text>
            <CardNumber>XX / XX</CardNumber>
          </Thirdline>
          <FourLine>
            <CardNumber>Matheus Silva</CardNumber>
            <IconeMaster>
              <Image source={master} resizeMode="contain" style={{ height: 38 }} />
            </IconeMaster>
          </FourLine>
        </Card>

        <GenerateNewNumber>
          <Text>Gerar</Text>
          <Text>Cartao Virtual</Text>
        </GenerateNewNumber>

        <ContainerAlert>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>
            Utilize o cartao digital crediup para fazer comprar online sem medo de clonagem pois ele
            estara ativo apenas para uma transacao
          </Text>
        </ContainerAlert>
      </Container>
    );
  }
}

export default GenerateCard;
