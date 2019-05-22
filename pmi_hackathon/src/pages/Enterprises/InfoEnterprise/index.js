import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

import foto1 from "../../../assets/imgs/1.png";
import foto2 from "../../../assets/imgs/1.png";
import foto3 from "../../../assets/imgs/1.png";
import api from "../../../services/api";

import {
  Container,
  BadgeButton,
  BadgeBox,
  ScrollContainer,
  LogoArea,
  InformationContent
} from "./styles";

export class InfoEnterprise extends Component {
  static navigationOptions = {
    title: "INFORMACOES"
  };

  state = {
    enterprise: {}
  };

  componentDidMount() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    console.log("itemId", itemId);
    const data = api
      .get(`/empresas/${itemId}`)
      .then(response => response.json());

    console.log("data", data);

    console.log(this.state.enterprise);
  }

  render() {
    return (
      <Container>
        <Text style={{ fontSize: 100, color: "#756758" }}>15</Text>
        <Text>Quantidade Litros</Text>
        <ScrollContainer>
          <BadgeBox>
            <LogoArea>
              <Image
                source={foto1}
                style={{
                  height: 70,
                  width: 70
                }}
              />
            </LogoArea>
            <InformationContent>
              <Text>
                Aute cupidatat anim amet labore aliqua voluptate in ex deserunt
                unt id.
              </Text>
            </InformationContent>
          </BadgeBox>
        </ScrollContainer>
      </Container>
    );
  }
}

export default InfoEnterprise;
