import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Container, AddButton, Title } from "./styles";

export class AddConsume extends Component {
  static navigationOptions = {
    title: "ADICIONAR OLEO"
  };
  render() {
    return (
      <Container>
        <Title>Insira a quantidade de litros</Title>
        <TextInput
          style={{ marginTop: 20 }}
          placeholder="Digite a quantidade em litros"
        />
        <AddButton>
          <Text>ADICIONAR</Text>
        </AddButton>
      </Container>
    );
  }
}

export default AddConsume;
