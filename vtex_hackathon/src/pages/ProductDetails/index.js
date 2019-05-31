import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
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
import { TouchableOpacity } from "react-native-gesture-handler";

export class ProductDetails extends Component {
  state = {
    isflagged: false
  };

  toogleFlag = () => {
    this.setState({
      isflagged: !this.state.isflagged
    });
  };

  static navigationOptions = {
    title: "Detalhes do Produto"
  };
  render() {
    const { isflagged } = this.state;
    return (
      <View>
        <Container>
          <ContainerProduct>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
              Quarto de Casal Completo MadeiraMadeira com Guarda Roupa 3 Portas
              8 Gavetas e Cabeceira com 2 Criado Canela
            </Titulo>

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
                <Text>Possui Portas : 03 </Text>
                <Text>Acabamento : Pintura</Text>
                <Text>Cor : Canela </Text>
                <Text>Material Principal: MDF </Text>
                <Text>Cor Predominante: Marrom </Text>
                <Text>Ambiente: Quarto</Text>
                <Text>Acompanha cama: Sim </Text>
              </View>
            ) : (
              <ScrollView>
                <View style={{ marginTop: 15 }}>
                  <Text>Nome Usuario</Text>
                  <Text>Comentario</Text>
                  <Line />
                  <Text>Nome Usuario</Text>
                  <Text>Comentario</Text>
                  <Line />
                  <Text>Nome Usuario</Text>
                  <Text>Comentario</Text>
                  <Line />
                  <Text>Nome Usuario</Text>
                  <Text>Comentario</Text>
                  <Line />
                  <Text>Nome Usuario</Text>
                  <Text>Comentario</Text>
                  <Line />
                  <Text>Nome Usuario</Text>
                  <Text>Comentario</Text>
                </View>
              </ScrollView>
            )}
          </ContainerDetails>
          <ButtonPayment>
            <Text style={{ color: "#FFF" }}>IR PARA PAGAMENTO</Text>
          </ButtonPayment>
        </Container>
      </View>
    );
  }
}

export default ProductDetails;
