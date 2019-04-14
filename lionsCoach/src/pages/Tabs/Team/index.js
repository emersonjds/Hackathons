import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import campo from "../../../assets/img/campo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from "react-native-material-dropdown";
import campinho from "../../../assets/img/campinho.png";
import prancheta from "../../../assets/img/prancheta.png";
import player1 from "../../../assets/img/1.png";
import player2 from "../../../assets/img/2.png";
import player3 from "../../../assets/img/3.png";
import ruan from "../../../assets/img/RUAN.png";
import styles from "./styles";

export class Team extends Component {
  render() {
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
        <View style={styles.containerTatic}>
          <Text style={styles.title}>Scale the Team</Text>
          <Text style={styles.subtitle}>Team Building</Text>

          <View style={styles.tatic}>
            <View style={styles.dropdown}>
              {/* <Text>Dropdown</Text> */}
              <Dropdown
                label="4-4-2"
                labelColor="#FFF"
                data={data}
                dropdownOffset={{ top: 15 }}
                containerStyle={{
                  borderWidth: 1,
                  height: 30,
                  backgroundColor: "#9344D5",
                  justifyContent: "center",
                  borderRadius: 30,
                  alignContent: "center",
                  padding: 10
                }}
              />
            </View>

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
              {/* <Icon name="plus" size={22} color="rgb(136,101,197)" /
            > */}
              <Image source={player2} style={{ marginTop: 30 }} />
            </TouchableOpacity>
            <Text style={styles.position}>GRIN</Text>
          </View>

          <View style={styles.containerPlayer1}>
            <TouchableOpacity style={styles.player1}>
              {/* <Icon name="plus" size={22} color="rgb(136,101,197)" /> */}
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
              {/* <Icon name="plus" size={22} color="rgb(136,101,197)" /> */}
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
      </View>
    );
  }
}

export default Team;
