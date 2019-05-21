import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import {
  Container,
  EnterpriseContainer,
  EnterpriseLogoContainer,
  EntrepriseInformations,
  ContainerButtons
} from "./styles";

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
      </Container>
    );
  }
}

export default Enterprises;
