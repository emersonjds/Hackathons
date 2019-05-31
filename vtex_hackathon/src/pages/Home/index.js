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
import sala_1 from "../../assets/img/slider/sala_1.jpg";
import sala_2 from "../../assets/img/slider/sala_2.jpg";
import sala_3 from "../../assets/img/slider/sala_3.jpg";
import sala_5 from "../../assets/img/slider/sala_5.jpg";
import sala_6 from "../../assets/img/slider/sala_6.jpg";
import decor_1 from "../../assets/img/decor/decor_1.jpg";
import decor_2 from "../../assets/img/decor/decor_2.jpg";
import decor_3 from "../../assets/img/decor/decor_3.png";
import decor_4 from "../../assets/img/decor/decor_4.jpg";
import decor_5 from "../../assets/img/decor/decor_5.jpg";
import decor_6 from "../../assets/img/decor/decor_6.jpg";

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
        <TouchableOpacity onPress={() => {}}>
          <IconFontAwesome
            name="heart"
            size={22}
            style={{ paddingRight: 16, color: "#000" }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
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
    const { navigation } = this.props;
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
            <ContainerMiniBanner
              onPress={() => navigation.navigate("ProductDetails")}
            >
              <Image source={sala_1} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={sala_2} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>

            <ContainerMiniBanner>
              <Image source={sala_3} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={sala_5} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={sala_6} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
            <ContainerMiniBanner>
              <Image source={sala} style={{ height: 150, width: 150 }} />
            </ContainerMiniBanner>
          </ScrollView>
          <Text style={{ marginTop: 10, marginBottom: 10 }}>Divider</Text>
          <ScrollView>
            <ContainerPhotos>
              <TouchableWithoutFeedback>
                <Photo source={decor_1} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={decor_2} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={decor_3} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={decor_4} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={decor_5} resizeMode="cover" />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <Photo source={decor_6} resizeMode="cover" />
              </TouchableWithoutFeedback>
            </ContainerPhotos>
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}

export default Home;
