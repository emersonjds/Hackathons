import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  StatusBar
} from "react-native";
import campo from "../../../assets/img/campo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import campinho from "../../../assets/img/campinho.png";
import prancheta from "../../../assets/img/prancheta.png";
import player1 from "../../../assets/img/1.png";
import player2 from "../../../assets/img/2.png";
import player3 from "../../../assets/img/3.png";
import ruan from "../../../assets/img/RUAN.png";
import topo from "../../../assets/img/topo.png";
import team from "../../../assets/img/team.png";
import orlando from "../../../assets/img/orlando.png";
import colorado from "../../../assets/img/xxx.png";
import Modal from "react-native-modal";
import styles from "./styles";

export class InGame extends Component {
  state = {
    isModalVisible: false,
    switchValue: false,
    switchValue1: false
  };

  _showModal = () => this.setState({ isModalVisible: true });
  _hideModal = () => this.setState({ isModalVisible: false });

  static navigationOptions = {
    title: "In Game"
  };

  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  toggleSwitch = value => {
    this.setState({ switch1Value: value });
  };

  toggleSwitch1 = value => {
    this.setState({ switch1Value: value });
  };
  onCloseModal3 = () => {
    this.setState({ isModalVisible: false }, () => {
      setTimeout(() => {
        console.log("fechou");
      }, 510);
    });
  };

  render() {
    const { isModalVisible, switch1Value, switch1Value1 } = this.state;
    let data = [
      {
        value: "4-4-2"
      },
      {
        value: "3-4-3"
      },
      {
        value: "5-4-1"
      },
      {
        value: "4-3-3"
      }
    ];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.placar}>
            <Image source={orlando} />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 20, color: "#FFF" }}>83:23</Text>
              <Text style={{ fontSize: 40, color: "#FFE280" }}>3 - 0 </Text>
            </View>
            <Image source={colorado} />
          </View>
          <View style={styles.containerTatic}>
            <View style={styles.tatic}>
              <View style={styles.dropdown} />

              <View style={styles.taticIcons}>
                <Image source={campinho} />
                <Image source={prancheta} />
              </View>
            </View>
          </View>

          <View style={styles.campo}>
            <Image source={campo} />

            <View style={styles.containerPlayer}>
              <TouchableOpacity style={styles.player}>
                <Image source={player2} style={{ marginTop: 30 }} />
              </TouchableOpacity>
              <Text style={styles.position}>GRIN</Text>
            </View>

            <View style={styles.containerPlayer1}>
              <TouchableOpacity style={styles.player1}>
                <Image source={player1} style={{ marginTop: 30 }} />
              </TouchableOpacity>
              <Text style={styles.position1}>MENDES</Text>
            </View>

            <View style={styles.containerPlayer2}>
              <TouchableOpacity style={styles.player2}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position2}>DF</Text>
            </View>

            <View style={styles.containerPlayer3}>
              <TouchableOpacity style={styles.player3}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position3}>DF</Text>
            </View>

            <View style={styles.containerPlayer4}>
              <TouchableOpacity style={styles.player4}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position4}>DF</Text>
            </View>

            {/* MIDDLE FIELD */}
            <View style={styles.containerPlayer5}>
              <TouchableOpacity style={styles.player5}>
                <Image source={ruan} style={{ marginTop: 30 }} />
              </TouchableOpacity>
              <Text style={styles.position5}>RUAN</Text>
            </View>
            <View style={styles.containerPlayer6}>
              <TouchableOpacity style={styles.player6}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position6}>DF</Text>
            </View>
            <View style={styles.containerPlayer7}>
              <TouchableOpacity style={styles.player7}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position7}>DF</Text>
            </View>
            <View style={styles.containerPlayer8}>
              <TouchableOpacity style={styles.player8}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position8}>DF</Text>
            </View>
            <View style={styles.containerPlayer9}>
              <TouchableOpacity style={styles.player9}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position9}>DF</Text>
            </View>
            <View style={styles.containerPlayer10}>
              <TouchableOpacity style={styles.player10}>
                <Icon name="plus" size={22} color="rgb(136,101,197)" />
              </TouchableOpacity>
              <Text style={styles.position10}>DF</Text>
            </View>

            {/* END MIDDLE FIELD */}
          </View>

          <TouchableOpacity style={styles.makeAHint} onPress={this._showModal}>
            <Text style={{ fontSize: 25, color: "#FFF", fontWeight: "bold" }}>
              MAKE A HINT
            </Text>
          </TouchableOpacity>
          {/* <Modal
            isVisible={this.state.isModalVisible}
            style={{ height: 200, backgroundColor: "#FFF" }}
          >
            <View
              style={{
                height: 216,
                backgroundColor: "#8200FA",
                padding: 15,
                position: "relative"
              }}
            >
              <Text>Teste</Text>
            </View>
          </Modal> */}

          <Modal isVisible={this.state.isModalVisible}>
            <View
              style={{
                height: 520,
                backgroundColor: "#FFF",
                padding: 15,
                position: "relative"
              }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    position: "absolute",
                    right: 5,
                    borderRadius: 100,
                    borderColor: "#FFF"
                  }}
                >
                  <Icon
                    name="close"
                    size={20}
                    color="#000"
                    onPress={this._hideModal}
                  />
                </View>
              </TouchableOpacity>

              <View style={styles.modalContainer}>
                <Text
                  style={{ fontSize: 30, color: "rgb(6,7,47)", marginTop: 15 }}
                >
                  Whats your hint ?{" "}
                </Text>
                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                  here your hint have value
                </Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholder="#SHAREYOURHINT"
                  style={{
                    backgroundColor: "rgb(239,240,243)",
                    height: 200,
                    borderRadius: 20,

                    marginTop: 10
                  }}
                />

                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    color: "#000",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  Share your hint with the world
                </Text>

                <View>
                  <View style={styles.twitter}>
                    <Text>Twitter</Text>
                    <Switch
                      value={this.state.switchValue}
                      onValueChange={value =>
                        this.setState({ switchValue: value })
                      }
                    />
                  </View>
                  <View style={styles.facebook}>
                    <Text>Facebook</Text>
                    <Switch
                      value={this.state.switchValue1}
                      onValueChange={value =>
                        this.setState({ switchValue1: value })
                      }
                    />
                  </View>
                </View>

                <TouchableOpacity style={styles.makeAHint2}>
                  <Text
                    style={{ fontSize: 25, color: "#FFF", fontWeight: "bold" }}
                  >
                    SEND
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

export default InGame;
