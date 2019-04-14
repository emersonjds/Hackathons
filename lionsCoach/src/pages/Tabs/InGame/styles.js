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
    // backgroundColor: "pink",
    width: metrics.screenWidth - 40,
    marginTop: 15
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
    // backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dropdown: {
    // backgroundColor: "red",
    width: "30%",
    height: 30
  },
  taticIcons: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-around"
    // backgroundColor: "yellow"
  },
  campo: {
    width: 350,
    height: 530,
    // backgroundColor: "yellow",
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
    fontSize: 12,
    color: "#FFF",
    fontWeight: "bold"
  },
  // LE

  // ZE
  containerPlayer2: {
    height: 60,
    width: 70,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    bottom: 130,
    left: 110
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
  },
  // ZE

  // ZD
  containerPlayer3: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    bottom: 130,
    right: 110
  },
  player3: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position3: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // ZD

  // LD
  containerPlayer4: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    bottom: 150,
    right: 30
  },
  player4: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position4: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // LD

  // MIDDLE FIELD

  // MD
  containerPlayer5: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    top: 170,
    right: 30
  },
  player5: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position5: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // MD

  // ME
  containerPlayer6: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    top: 190,
    right: 110
  },
  player6: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position6: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // ME

  // MEE
  containerPlayer7: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    top: 190,
    right: 190
  },
  player7: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position7: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // MEE

  // MDD
  containerPlayer8: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    top: 170,
    left: 30
  },
  player8: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position8: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // MDD

  // ATK LE
  containerPlayer9: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    top: 70,
    left: 110
  },
  player9: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position9: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  // END ATK LE

  // ATK LD
  containerPlayer10: {
    height: 60,
    width: 50,
    // backgroundColor: "pink",
    alignItems: "center",
    position: "absolute",
    top: 70,
    right: 110
  },
  player10: {
    width: 49,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  position10: {
    marginTop: 5,
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },
  makeAHint: {
    height: 52,
    backgroundColor: "rgb(128,68,190)",
    width: 337,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  makeAHint2: {
    height: 52,
    backgroundColor: "rgb(128,68,190)",
    width: 250,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  placar: {
    marginTop: 10,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  twitter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  facebook: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
  // END ATK LD

  // END MIDDLE FIELD
});
export default styles;
