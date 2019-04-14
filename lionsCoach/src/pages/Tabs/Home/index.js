import React, { Component } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import LinearGradient from "react-native-linear-gradient";
import avatar from "../../../assets/img/oval.png";
import orlandoLogo from "../../../assets/img/orlandoCityScLogo.png";
import orlandoPride from "../../../assets/img/orlandoPrideLogo.png";

import styles from "./styles";

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* USER DETAILS */}
        <View style={styles.userData}>
          <View style={styles.data}>
            <Text style={styles.titleUserData}>Hey Coach</Text>
            <Text style={styles.secondTitleUserData}>Lets scale the team</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "20%"
            }}
          >
            <Image source={avatar} />
          </View>
        </View>
        {/* END USER DETAILS */}

        {/* POINTS AND DETAILS */}
        <View style={styles.pointsAndDetails}>
          <View style={styles.textPoints}>
            <Text style={styles.myPoints}>MY POINTS </Text>
            <Text style={styles.totalPoints}>56</Text>
          </View>

          <TouchableOpacity style={styles.buttonOpen}>
            <Text style={styles.textOpenButton}>OPEN</Text>
          </TouchableOpacity>
        </View>
        {/* END POINTS AND DETAILS */}

        {/* CHOICE TEAM */}
        <View style={styles.choiceTeam}>
          <View style={styles.containerChoiceText}>
            <Text style={styles.textChoice}>SELECT THE TEAM</Text>
          </View>

          <View style={styles.teamsContainer}>
            <Image source={orlandoLogo} />
            <Image source={orlandoPride} />
          </View>
        </View>
        {/* END CHOICE TEAM */}

        <View style={styles.cardArea}>
          <CardStack
            style={styles.content}
            ref={swiper => {
              this.swiper = swiper;
            }}
            renderNoMoreCards={() => (
              <Text style={{ fontWeight: "700", fontSize: 18, color: "gray" }}>
                Sem graficos para exibição
              </Text>
            )}
            ref={swiper => {
              this.swiper = swiper;
            }}
            loop={true}
          >
            <Card style={[styles.card, styles.card1]}>
              <LinearGradient colors={["#8044BC", "#653595"]}>
                {/* REMOVER ESTA AREA */}
                {/* <Text style={styles.label}>A</Text> */}
              </LinearGradient>
            </Card>

            <Card style={[styles.card, styles.card2]}>
              <LinearGradient colors={["#8044BC", "#653595"]}>
                {/* REMOVER ESTA AREA */}
                {/* <Text style={styles.label}>B</Text> */}
              </LinearGradient>
            </Card>

            <Card style={[styles.card, styles.card2]}>
              <LinearGradient colors={["#8044BC", "#653595"]}>
                {/* REMOVER ESTA AREA */}
                {/* <Text style={styles.label}>B</Text> */}
              </LinearGradient>
            </Card>
          </CardStack>
        </View>
      </View>
    );
  }
}

export default Home;
