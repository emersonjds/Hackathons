import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import {
  Container,
  EnterpriseContainer,
  EnterpriseLogoContainer,
  EntrepriseInformations,
  ContainerButtons,
  AddButton
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome, { Icons } from "react-native-fontawesome";

export class Enterprises extends Component {
  static navigationOptions = {
    title: "Empresas"
  };
  render() {
    return (
      <Container>
        <ScrollView>
          <EnterpriseContainer>
            <EnterpriseLogoContainer />
            <EntrepriseInformations />
            <ContainerButtons />
          </EnterpriseContainer>

          <EnterpriseContainer>
            <EnterpriseLogoContainer />
            <EntrepriseInformations />
            <ContainerButtons />
          </EnterpriseContainer>

          <EnterpriseContainer>
            <EnterpriseLogoContainer />
            <EntrepriseInformations />
            <ContainerButtons />
          </EnterpriseContainer>

          <EnterpriseContainer>
            <EnterpriseLogoContainer />
            <EntrepriseInformations />
            <ContainerButtons />
          </EnterpriseContainer>

          <EnterpriseContainer>
            <EnterpriseLogoContainer />
            <EntrepriseInformations />
            <ContainerButtons />
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
