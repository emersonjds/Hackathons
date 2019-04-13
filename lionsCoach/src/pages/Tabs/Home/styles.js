import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_bg,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  card: {
    width: 334,
    height: 300,
    marginBottom: 20,
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
  }
  // pointsAndDetails: {
  //   flexDirection: "row",
  //   backgroundColor: "green",
  //   height: 60
  // }
});

export default styles;
