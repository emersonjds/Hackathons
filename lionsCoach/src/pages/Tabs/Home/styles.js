import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_bg
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 334,
    height: 300,
    borderRadius: 15,
    backgroundColor: "red",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  },
  card1: {
    borderRadius: 15
  },
  card2: {
    borderRadius: 15
  },
  // label: {
  //   textAlign: "center",
  //   fontSize: 55,
  //   fontFamily: "System",
  //   color: "#ffffff",
  //   backgroundColor: "transparent"
  // },
  userData: {
    flexDirection: "row",
    height: 80,
    width: metrics.screenWidth,
    paddingHorizontal: 30
  },
  data: {
    width: "80%",

    paddingTop: 10
  },
  titleUserData: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  },
  secondTitleUserData: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#707070"
  },
  pointsAndDetails: {
    height: 80,
    width: metrics.screenWidth,
    flexDirection: "row",
    paddingHorizontal: 30,
    alignItems: "center"
  },
  myPoints: {
    fontSize: 20,
    color: "#FFF"
  },
  totalPoints: {
    fontSize: 40,
    color: "#FFF",
    fontWeight: "bold"
  },
  textPoints: {
    width: "68%"
  },
  buttonOpen: {
    width: 105,
    height: 34,
    backgroundColor: "#8044BC",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  textOpenButton: {
    color: "#FFF",
    fontSize: 14
  },
  cardArea: {
    width: metrics.screenWidth,
    height: 320,
    backgroundColor: "yellow",
    marginTop: 5
  },
  choiceTeam: {
    height: 52,
    width: metrics.screenWidth,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    flexDirection: "row"
  },
  containerChoiceText: {
    width: "70%"
  },
  textChoice: {
    fontSize: 14,
    color: "#FFF"
  },
  teamsContainer: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default styles;
