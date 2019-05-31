import React, { Component } from "react";
import { Text, View } from "react-native";

export class Cart extends Component {
  state = {};
  static navigationOptions = {
    title: "Carteira"
  };
  render() {
    return (
      <View>
        <Text> Cart </Text>
      </View>
    );
  }
}

export default Cart;
