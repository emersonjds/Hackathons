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
    const { navigation } = this.props;
    return (
      <Container>
        <BadgeButton onPress={() => navigation.navigate("Badges")}>
          <Text>Badges</Text>
        </BadgeButton>
      </Container>
    );
  }
}

export default InfoEnterprise;
