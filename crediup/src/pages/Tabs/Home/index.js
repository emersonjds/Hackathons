import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { Container, CardArea } from './styles';
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
      </Container>
    );
  }
}

export default Home;
