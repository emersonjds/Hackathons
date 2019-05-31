import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import {
  Container,
  ContainerBanner,
  ContainerMiniBanner,
  ContainerPhoto,
  ContainerPhotos,
  Photo
} from "./styles";
import cama from "../../assets/img/cama.jpg";
import sala from "../../assets/img/sala.jpg";
import cozinha from "../../assets/img/cozinha.jpg";
import quarto from "../../assets/img/quarto.jpg";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Avatar } from "react-native-elements";
import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";

export class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <IconFontAwesome
        name="align-justify"
        size={22}
        style={{ paddingLeft: 16, color: "#000" }}
      />
    ),
    headerRight: (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <IconFontAwesome
            name="heart"
            size={22}
            style={{ paddingRight: 16, color: "#000" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconMaterialCommunity
            name="cart"
            size={22}
            style={{ paddingRight: 16, color: "#000" }}
          />
        </TouchableOpacity>
      </View>
    )
  });
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
          <ScrollView>
            <ContainerPhotos>
              <TouchableWithoutFeedback>
                <Photo source={sala} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={sala} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={sala} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={sala} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={sala} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={sala} resizeMode="cover" />
              </TouchableWithoutFeedback>
            </ContainerPhotos>
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}

export default Home;
