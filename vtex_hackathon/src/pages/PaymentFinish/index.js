import React, { Component } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import {
  Container,
  Order,
  DataLine,
  OrderId,
  TextId,
  FinishButton
} from "./styles";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import api from "../../services/api";

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

  constructor(props) {
    super(props);
    this.state = {
      flagged: false
    };

    setInterval(async () => {
      let response = await api("/get_negotiation");
      let status = response.data.status;

      console.log("get negotiation", status);

      if (status == "finish") {
        let response2 = await api("/reset");

        Alert.alert(
          "Mensagem",
          "Recebemos a sua solicitacao, agora e,é so aguardar e em breve o cashback estara disponviel na sua conta",
          [
            ({
              text: "Cancel",
              onPress: () => {}
            },
            {
              text: "OK",
              onPress: () => {
                this.setState({
                  flagged: !this.state.flagged
                }),
                  () => {
                    console.log(this.state);
                  };
              }
            })
          ]
        );
      }
    }, 4000);
  }

  sendRequest = async () => {
    let data = await api.get("/send_negotiation");
    console.log(data);
  };

  render() {
    const { flagged } = this.state;
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
            <Text style={{ fontWeight: "bold" }}>380,00 </Text>
          </DataLine>
        </Order>

        {flagged && (
          <TouchableOpacity
            style={{
              backgroundColor: "#cecece",
              height: 50,
              width: "100%",
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10
            }}
          >
            <Text>Compra Finalizada</Text>
          </TouchableOpacity>
        )}
        {!flagged && (
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
            onPress={this.sendRequest}
          >
            <Text>FINALIZAR COMPRA</Text>
          </TouchableOpacity>
        )}
      </Container>
    );
  }
}

export default PaymentFinish;
