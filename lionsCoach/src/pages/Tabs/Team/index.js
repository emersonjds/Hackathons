import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import campo from "../../../assets/img/campo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export class Team extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTatic}>
          <Text style={styles.title}>Scale the Team</Text>
          <Text style={styles.subtitle}>Team Building</Text>

          <View style={styles.tatic}>
            <View style={styles.dropdown}>
              <Text>Dropdown</Text>
            </View>

            <View style={styles.taticIcons}>
              <Text>Icon 1</Text>
              <Text>Icon 2</Text>
            </View>
          </View>
        </View>

        <View style={styles.campo}>
          <Image source={campo} />

          <View style={styles.containerPlayer}>
            <TouchableOpacity style={styles.player}>
              <Icon name="plus" size={22} color="rgb(136,101,197)" />
            </TouchableOpacity>
            <Text style={styles.position}>GK</Text>
          </View>

          <View style={styles.containerPlayer1}>
            <TouchableOpacity style={styles.player1}>
              <Icon name="plus" size={22} color="rgb(136,101,197)" />
            </TouchableOpacity>
            <Text style={styles.position1}>DF</Text>
          </View>

          <View style={styles.containerPlayer2}>
            <TouchableOpacity style={styles.player2}>
              <Icon name="plus" size={22} color="rgb(136,101,197)" />
            </TouchableOpacity>
            <Text style={styles.position2}>DF</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Team;
