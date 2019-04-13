import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import lions from "../../assets/img/lions.jpeg";
import styles from "./styles";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={lions}
          style={{
            width: 320,
            height: 300
          }}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.enterButton}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.enterButton}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
