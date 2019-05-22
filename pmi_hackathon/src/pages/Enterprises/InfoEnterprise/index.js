import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Container, BadgeButton } from "./styles";

export class InfoEnterprise extends Component {
  static navigationOptions = {
    title: "INFORMACOES"
  };

  render() {
    return (
      <Container>
        <BadgeButton>
          <Text>Badges</Text>
        </BadgeButton>
      </Container>
    );
  }
}

export default InfoEnterprise;
