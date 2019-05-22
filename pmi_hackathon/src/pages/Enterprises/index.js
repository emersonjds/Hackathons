import React, { Component } from "react";
import { Text, ScrollView, Image } from "react-native";
import {
  Container,
  EnterpriseContainer,
  EnterpriseLogoContainer,
  EntrepriseInformations,
  ContainerButtons,
  AddButton,
  ActionButtons
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Avatar } from "react-native-elements";
import restaurante from "../../assets/imgs/kinect.jpg";
import resta from "../../assets/imgs/resta.png";

export class Enterprises extends Component {
  static navigationOptions = {
    title: "Empresas",
    headerBackTitle: null
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ScrollView>
          <EnterpriseContainer>
            <EnterpriseLogoContainer>
              <Image
                source={resta}
                resizeMode="contain"
                style={{ height: 60, width: 60 }}
              />
              {/* <Avatar
                size="medium"
                rounded
                source={{
                  uri:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                }}
                activeOpacity={0.7}
              /> */}
            </EnterpriseLogoContainer>
            <EntrepriseInformations>
              <Text> Restaurante Dona Joane</Text>
              <Text> Contribuinte a 3 anos</Text>
            </EntrepriseInformations>
            <ContainerButtons>
              <ActionButtons onPress={() => navigation.navigate("AddConsume")}>
                <Text style={{ color: "#FFF" }}>ADD</Text>
              </ActionButtons>
              <ActionButtons
                onPress={() => navigation.navigate("InfoEnterprise")}
              >
                <Text style={{ color: "#FFF" }}>INFO</Text>
              </ActionButtons>
            </ContainerButtons>
          </EnterpriseContainer>
        </ScrollView>
        <AddButton>
          <Icon name="plus" color="#FFF" size={23} />
        </AddButton>
      </Container>
    );
  }
}

export default Enterprises;
