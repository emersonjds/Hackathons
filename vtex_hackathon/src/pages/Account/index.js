import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Container, Line, TextUser, ContainerCashBack } from "./styles";

export class Account extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Minha Conta",
    headerLeft: (
      <TouchableOpacity>
        <IconFontAwesome
          name="chevron-left"
          size={22}
          style={{ paddingLeft: 16, color: "#000" }}
        />
      </TouchableOpacity>
    )
  });
  render() {
    return (
      <Container>
        <TextUser>Meus Dados</TextUser>
        <Line />
        <TextUser>Meus meios de pagamento</TextUser>
        <Line />

        <TextUser>Sair</TextUser>
        <Line />

        <ContainerCashBack>
          <TextUser style={{ fontSize: 20 }}>Meus Cashbacks</TextUser>
          <Line />
          <TextUser style={{ fontSize: 40 }}>R$ 57.00,00</TextUser>
        </ContainerCashBack>
      </Container>
    );
  }
}

export default Account;
