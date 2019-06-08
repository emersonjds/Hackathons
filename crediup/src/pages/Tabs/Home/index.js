import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, CardArea } from './styles';

export class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {};

  render() {
    return (
      <Container>
        <CardArea />
      </Container>
    );
  }
}

export default Home;
