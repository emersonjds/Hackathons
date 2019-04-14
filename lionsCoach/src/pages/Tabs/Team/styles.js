import { StyleSheet } from "react-native";
import { metrics, colors } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_bg,
    alignItems: "center",
    justifyContent: "center"
  },
  containerTatic: {
    backgroundColor: "pink",
    width: metrics.screenWidth - 40
  },
  title: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    color: "#7a7a7a"
  },
  tatic: {
    flexDirection: "row",
    backgroundColor: "blue"
  },
  dropdown: {
    backgroundColor: "red",
    width: "70%"
  },
  taticIcons: {
    width: "30%",
    backgroundColor: "yellow"
  },
  campo: {
    width: 350,
    height: 530,
    backgroundColor: "yellow",
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  containerPlayer: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    bottom: 40
  },
  player: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },

  // LE
  containerPlayer1: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    bottom: 150,
    left: 40
  },
  player1: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position1: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // LE

  // ZE
  containerPlayer2: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    bottom: 130,
    left: 120
  },
  player2: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position2: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  }
  // ZE
});
export default styles;
