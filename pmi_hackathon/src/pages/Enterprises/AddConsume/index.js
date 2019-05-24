import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Device,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import { Container, AddButton, Title } from "./styles";
import api from "../../../services/api";

export class AddConsume extends Component {
  static navigationOptions = {
    title: "ADICIONAR OLEO"
  };

  state = {
    value: ""
  };

  handleValue = text => {
    this.setState({
      value: text
    });
  };

  sendConsume = () => {
    const { navigation } = this.props;
    const { value } = this.state;
    const enterpriseObject = navigation.getParam("obj");
    console.log("inicial", enterpriseObject.quantity_liters);
    const newObject = enterpriseObject;
    newObject.quantity_liters = parseInt(value);
    console.log("old", enterpriseObject);
    console.log("new", newObject);

    // let url = api.post();

    let data = {
      method: "POST",
      body: JSON.stringify({
        newObject
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    api.get("/litro/" + newObject);
    api
      .post("https://ongrecebe.mybluemix.net/litro", newObject)
      .then(response => response.text(), err => console.log(err)); // promise
  };

  render() {
    return (
      <Container>
        <Title>Insira a quantidade de litros</Title>
        <TextInput
          style={{ marginTop: 20 }}
          keyboardType={"numeric"}
          placeholder="Digite a quantidade em litros"
          onChangeText={value => this.setState({ value })}
          value={this.state.value}
        />
        <AddButton onPress={this.sendConsume}>
          <Text>ADICIONAR</Text>
        </AddButton>
      </Container>
    );
  }
}

export default AddConsume;
