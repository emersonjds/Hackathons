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

const badges = [
  {
    id: 1,
    url: "../../../assets/imgs/badges/badge-doador-campeao.png",
    text:
      "Viva! Você agora é um doador campeão. Indique para se tornar um embaixador. "
  },
  {
    id: 2,
    url: "../../../assets/imgs/badges/badge-doador-consciente.png",
    text: "Oba! Obrigada por apoiar a nossa causa."
  },
  {
    id: 3,
    url: "../../../assets/imgs/badges/badge-doador-heroi.png",
    text: "Uau! Você está cada vez mais perto de se tornar um doador campeão. "
  },
  {
    id: 4,
    url: "../../../assets/imgs/badges/badge-doador-solidario.png",
    text: "Parabéns! Você entrou na disputa por um mundo mais verde."
  },
  {
    id: 5,
    url: "../../../assets/imgs/badges/badge-embaixador.png",
    text:
      "Fantástico! Você se tornou um embaixador da ONG. Compartilhe nas redes sociais."
  }
];

export class InfoEnterprise extends Component {
  static navigationOptions = {
    title: "INFORMACOES"
  };

  state = {
    enterprise: {},
    badges: badges
  };

  componentDidMount() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    console.log("itemId", itemId);
    const { data } = api.get(`/empresas/${itemId}`).then(response => {
      if (response != undefined) {
        if (response.data[0] != undefined) {
          this.setState({
            enterprise: response.data[0]
          });
        }
        console.log(response.data[0]);
      }
    });
  }

  render() {
    const { enterprise, badges } = this.state;
    // var cont = 0;
    // loop = [];

    // while (cont < enterprise.quantity_badge) {
    //   loop.push(
    //     badges &&
    //       badges.map(badge => {
    //         <BadgeBox key={badge.id}>
    //           <LogoArea>
    //             <Image
    //               source={badge.url}
    //               style={{
    //                 height: 70,
    //                 width: 70
    //               }}
    //             />
    //           </LogoArea>
    //           <InformationContent>
    //             <Text>{badge.text}</Text>
    //           </InformationContent>
    //         </BadgeBox>;
    //       })
    //   );
    //   cont++;
    // }

    return (
      <Container>
        <Text style={{ fontSize: 100, color: "#756758" }}>
          {enterprise.quantity_liters}
        </Text>
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
                Viva! Você agora é um doador campeão. Indique para se tornar um
                embaixador
              </Text>
            </InformationContent>
          </BadgeBox>

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
                Viva! Você agora é um doador campeão. Indique para se tornar um
                embaixador
              </Text>
            </InformationContent>
          </BadgeBox>

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
                Viva! Você agora é um doador campeão. Indique para se tornar um
                embaixador
              </Text>
            </InformationContent>
          </BadgeBox>
        </ScrollContainer>
      </Container>
    );
  }
}

export default InfoEnterprise;
