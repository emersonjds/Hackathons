import React, { Component } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  Container,
  ContainerProduct,
  ContainerBanner,
  Line,
  ContainerDetails,
  Titulo,
  ContainerButtons,
  ButtonsActions,
  ButtonPayment
} from "./styles";
import foto_1 from "../../assets/img/1.png";
import foto_2 from "../../assets/img/2.png";
import foto_3 from "../../assets/img/3.png";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Rating, AirbnbRating } from "react-native-elements";

export class ProductDetails extends Component {
  state = {
    isflagged: false
  };

  toogleFlag = () => {
    this.setState({
      isflagged: !this.state.isflagged
    });
  };

  static navigationOptions = ({ navigation }) => ({
    title: "Detalhes do Produto",
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
    const { isflagged } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <ScrollView>
          <ContainerProduct>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            >
              <ContainerBanner>
                <Image
                  source={foto_1}
                  style={{ height: "100%", width: "100%" }}
                />
              </ContainerBanner>
              <ContainerBanner>
                <Image
                  source={foto_2}
                  style={{ height: "100%", width: "100%" }}
                />
              </ContainerBanner>
              <ContainerBanner>
                <Image
                  source={foto_3}
                  style={{ height: "100%", width: "100%" }}
                />
              </ContainerBanner>
            </ScrollView>
          </ContainerProduct>

          <Line />
          <ContainerDetails>
            <Titulo>
              Cama de Casal. Queima de estoque, ultimas unidades . Colchao
              Ortobom, box com madeira de marfim e pes em aço escovado
            </Titulo>
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
              R$ 380,00
            </Text>

            <ContainerButtons>
              <ButtonsActions onPress={this.toogleFlag}>
                <Text>Informacoes</Text>
              </ButtonsActions>
              <ButtonsActions onPress={this.toogleFlag}>
                <Text>Comentarios</Text>
              </ButtonsActions>
            </ContainerButtons>

            {!isflagged ? (
              <View style={{ marginTop: 15 }}>
                <Text>Possui : 1 cama </Text>
                <Text>Acabamento : Pintura</Text>
                <Text>Cor : Canela </Text>
                <Text>Material Principal: Marfim </Text>
                <Text>Cor Predominante: Marrom </Text>
                <Text>Ambiente: Quarto</Text>
                <Text>Acompanha cama: Sim </Text>
              </View>
            ) : (
              <ScrollView>
                <View style={{ marginTop: 15 }}>
                  <Text>Jairo Iglesias </Text>
                  <Text>Excelente, super recomendo a compra</Text>
                  <Line
                    style={{ borderBottomColor: "#cecece", marginTop: 5 }}
                  />
                  <Text>Matheus Catossi</Text>
                  <Text>Atendeu as expectativas, super recomendo</Text>
                  <Line
                    style={{ borderBottomColor: "#cecece", marginTop: 5 }}
                  />
                  <Text>Emerson Silva</Text>
                  <Text>Entrega super rapida, super recomendo</Text>
                  <Line
                    style={{ borderBottomColor: "#cecece", marginTop: 5 }}
                  />
                  <Text>Mariane Teixeira</Text>
                  <Text>Produto excelente, super recomendo</Text>
                  <Line
                    style={{ borderBottomColor: "#cecece", marginTop: 5 }}
                  />
                  <Text>Victor Luis</Text>
                  <Text>Meu quarto ficou incrivel, super recomendo</Text>
                  <Line
                    style={{ borderBottomColor: "#cecece", marginTop: 5 }}
                  />
                  <Text>Leticia Maria</Text>
                  <Text>Melhor compra que fiz nos ultimos tempos</Text>
                </View>
              </ScrollView>
            )}
          </ContainerDetails>
          <ButtonPayment onPress={() => navigation.navigate("FinishPayment")}>
            <Text>IR PARA PAGAMENTO</Text>
          </ButtonPayment>
        </ScrollView>
      </Container>
    );
  }
}

export default ProductDetails;
