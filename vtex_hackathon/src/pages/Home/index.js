import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import {
  Container,
  ContainerBanner,
  ContainerMiniBanner,
  ContainerMiddle
} from "./styles";
import cama from "../../assets/img/cama.jpg";
import sala from "../../assets/img/sala.jpg";
import cozinha from "../../assets/img/cozinha.jpg";
import quarto from "../../assets/img/quarto.jpg";
import { Divider } from "react-native-elements";
import { Tile } from "react-native-elements";

export class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <Container>
        <ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ContainerBanner>
              <Image source={cama} style={{ height: "100%", width: "100%" }} />
            </ContainerBanner>
            <ContainerBanner>
              <Image source={sala} style={{ height: "100%", width: "100%" }} />
            </ContainerBanner>
            <ContainerBanner>
              <Image
                source={cozinha}
                style={{ height: "100%", width: "100%" }}
              />
            </ContainerBanner>
          </ScrollView>
          <Text style={{ marginTop: 10, marginBottom: 10 }}>Divider</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ContainerMiniBanner>
              <Image source={quarto} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={cozinha} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>

            <ContainerMiniBanner>
              <Image source={sala} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={sala} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={sala} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={sala} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
          </ScrollView>
          <Text style={{ marginTop: 10, marginBottom: 10 }}>Divider</Text>
        </ScrollView>
      </Container>
    );
  }
}

export default Home;
