import React, { Component } from 'react';
import {
  Text, View, Image, StatusBar, Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Container } from './styles';

const slides = [
  {
    key: 'somethun',
    image: require('../../assets/img/1.png'),
  },
  {
    key: 'somethun-dos',
    image: require('../../assets/img/2.png'),
  },
  {
    key: 'somethun1',
    image: require('../../assets/img/3.png'),
  },
];

export class IntroSlider extends Component {
  state = {
    showRealApp: false,
  };

  _renderItem = item => (
    <View>
      <Image source={item.image} style={{ width: Dimensions.get('window').width }} />
    </View>
  );

  _onDone = () => {
    const { navigation } = this.props;
    this.setState({ showRealApp: true });
    navigation.navigate('Login');
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} />
      </Container>
    );
  }
}

export default IntroSlider;
