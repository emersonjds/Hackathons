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
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../services/api";
import Axios from "axios";

export class Enterprises extends Component {
  static navigationOptions = {
    title: "Empresas",
    headerBackTitle: null
  };

  state = {
    data: []
  };

  async componentDidMount() {
    this.loadingEnterprises();
  }

  loadingEnterprises = async () => {
    const { data } = await api.get("/empresas");
    this.setState({
      data: data
    });
    console.log(this.state.data);
  };

  render() {
    const { navigation } = this.props;
    const { data } = this.state;
    return (
      <Container>
        <ScrollView>
          {data &&
            data.map(enterprise => {
              return (
                <EnterpriseContainer>
                  <EnterpriseLogoContainer>
                    <Image
                      source={resta}
                      resizeMode="contain"
                      style={{ height: 60, width: 60 }}
                    />
                  </EnterpriseLogoContainer>
                  <EntrepriseInformations>
                    <Text> {enterprise.title}</Text>
                    <Text>
                      {" "}
                      Contribuinte a {enterprise.quantity_mounth} meses
                    </Text>
                  </EntrepriseInformations>
                  <ContainerButtons>
                    <ActionButtons
                      onPress={() => navigation.navigate("AddConsume")}
                    >
                      <Text style={{ color: "#FFF" }}>ADD</Text>
                    </ActionButtons>
                    <ActionButtons
                      onPress={() =>
                        navigation.navigate("InfoEnterprise", {
                          itemId: enterprise._id
                        })
                      }
                    >
                      <Text style={{ color: "#FFF" }}>INFO</Text>
                    </ActionButtons>
                  </ContainerButtons>
                </EnterpriseContainer>
              );
            })}
        </ScrollView>
        <AddButton>
          <Icon name="plus" color="#FFF" size={23} />
        </AddButton>
      </Container>
    );
  }
}

export default Enterprises;
