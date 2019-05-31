import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  Container,
  Order,
  DataLine,
  OrderId,
  TextId,
  FinishButton
} from "./styles";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export class PaymentFinish extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Finalizar Compra",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
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
        <Order>
          <OrderId>
            <TextId>#28432457</TextId>
          </OrderId>
          <DataLine>
            <Text>Data da Ordem </Text>
            <Text>30/12/2018 </Text>
          </DataLine>
          <DataLine>
            <Text>Status: </Text>
            <Text> </Text>
          </DataLine>
          <DataLine>
            <Text>Payment Method </Text>
            <Text>Credit Card</Text>
          </DataLine>
          <DataLine>
            <Text>TOTAL: </Text>
            <Text style={{ fontWeight: "bold" }}>2800,00 </Text>
          </DataLine>
        </Order>

        <TouchableOpacity
          style={{
            backgroundColor: "lightgreen",
            height: 50,
            width: "100%",
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10
          }}
        >
          <Text>Finalizar Compra</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default PaymentFinish;
