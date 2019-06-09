import React, { Component } from 'react';
import {
  Text, View, Image, Alert,
} from 'react-native';
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

  constructor(props) {
    super(props);

    this.state = {
      cardSlot1: '0000',
      cardSlot2: '0000',
      cardSlot3: '0000',
      cardSlot4: '0000',
      cvv: '000',
      dateExp: '00/00',
    };
  }

  generateNumber = (range1, range2) => Math.floor(Math.random() * range1) + range2;

  handleGenerateNumber = () => {
    const cardSlot1 = this.generateNumber(2000, 5000);
    const cardSlot2 = this.generateNumber(2000, 5000);
    const cardSlot3 = this.generateNumber(2000, 5000);
    const cardSlot4 = this.generateNumber(2000, 5000);
    const cvv = this.generateNumber(100, 500);
    const dateExp = `${this.generateNumber(12, 14)}/${this.generateNumber(5, 6)}`;

    this.setState({
      cardSlot1,
      cardSlot2,
      cardSlot3,
      cardSlot4,
      cvv,
      dateExp,
    });
  };

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
            <CardNumber>{this.state.cardSlot1}</CardNumber>
            <CardNumber>{this.state.cardSlot2}</CardNumber>
            <CardNumber>{this.state.cardSlot3}</CardNumber>
            <CardNumber>{this.state.cardSlot4}</CardNumber>
          </SecondLine>
          <Thirdline>
            <Text style={{ color: 'silver' }}>CCV</Text>
            <CardNumber>{this.state.cvv}</CardNumber>
            <Text style={{ color: 'silver' }}>DATA EXP</Text>
            <CardNumber>{this.state.dateExp}</CardNumber>
          </Thirdline>
          <FourLine>
            <CardNumber>Matheus Silva</CardNumber>
            <IconeMaster>
              <Image source={master} resizeMode="contain" style={{ height: 38 }} />
            </IconeMaster>
          </FourLine>
        </Card>

        <GenerateNewNumber onPress={this.handleGenerateNumber}>
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
