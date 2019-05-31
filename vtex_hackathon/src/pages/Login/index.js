import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, ButtonLogin } from "./styles";

export class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ButtonLogin onPress={navigation.navigate("Tabs")}>
          <Text style={{ fontSize: 18 }}>Login</Text>
        </ButtonLogin>
      </Container>
    );
  }
}

export default Login;
