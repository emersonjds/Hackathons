import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, ButtonLogin } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <TouchableOpacity onPress={navigation.navigate("Tabs")}>
          <Text style={{ fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default Login;
