import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import {
  Container,
  Titulo,
  ContainerProduct,
  FotoProduto,
  Description,
  IconHeart
} from "./styles";
import foto_1 from "../../assets/img/escritorios/decorado_1.jpg";
import foto_2 from "../../assets/img/escritorios/decorado_2.jpeg";
import foto_3 from "../../assets/img/escritorios/decorado_4.jpg";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export class Favorites extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Meus Favoritos",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
        <Titulo>Gostou destes produtos ?!</Titulo>
        <ScrollView>
          <ContainerProduct>
            <FotoProduto>
              <Image
                source={foto_1}
                style={{ height: "100%", width: "100%" }}
              />
            </FotoProduto>
            <Description>
              <Text>Escritorio Decorado Mariana</Text>
              <Text>R$ 6.000,00</Text>
            </Description>
            <IconHeart>
              <IconFontAwesome name="heart" color="#f00" size={28} />
            </IconHeart>
          </ContainerProduct>

          <ContainerProduct>
            <FotoProduto>
              <Image
                source={foto_2}
                style={{ height: "100%", width: "100%" }}
              />
            </FotoProduto>
            <Description>
              <Text>Escritorio Decorado Mariana</Text>
              <Text>R$ 6.000,00</Text>
            </Description>
            <IconHeart>
              <IconFontAwesome name="heart" color="#f00" size={28} />
            </IconHeart>
          </ContainerProduct>

          <ContainerProduct>
            <FotoProduto>
              <Image
                source={foto_3}
                style={{ height: "100%", width: "100%" }}
              />
            </FotoProduto>
            <Description>
              <Text>Escritorio Decorado Mariana</Text>
              <Text>R$ 6.000,00</Text>
            </Description>
            <IconHeart>
              <IconFontAwesome name="heart" color="#f00" size={28} />
            </IconHeart>
          </ContainerProduct>

          <ContainerProduct>
            <FotoProduto>
              <Image
                source={foto_1}
                style={{ height: "100%", width: "100%" }}
              />
            </FotoProduto>
            <Description>
              <Text>Escritorio Decorado Mariana</Text>
              <Text>R$ 6.000,00</Text>
            </Description>
            <IconHeart>
              <IconFontAwesome name="heart" color="#f00" size={28} />
            </IconHeart>
          </ContainerProduct>

          <ContainerProduct>
            <FotoProduto>
              <Image
                source={foto_2}
                style={{ height: "100%", width: "100%" }}
              />
            </FotoProduto>
            <Description>
              <Text>Escritorio Decorado Mariana</Text>
              <Text>R$ 6.000,00</Text>
            </Description>
            <IconHeart>
              <IconFontAwesome name="heart" color="#f00" size={28} />
            </IconHeart>
          </ContainerProduct>

          <ContainerProduct>
            <FotoProduto>
              <Image
                source={foto_3}
                style={{ height: "100%", width: "100%" }}
              />
            </FotoProduto>
            <Description>
              <Text>Escritorio Decorado Mariana</Text>
              <Text>R$ 6.000,00</Text>
            </Description>
            <IconHeart>
              <IconFontAwesome name="heart" color="#f00" size={28} />
            </IconHeart>
          </ContainerProduct>
        </ScrollView>
      </Container>
    );
  }
}

export default Favorites;
