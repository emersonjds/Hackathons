import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 20,
    backgroundColor: "#FFF"
  },
  enterButton: {
    height: 52,
    backgroundColor: "purple",
    width: "95%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    alignSelf: "center"
  },
  textButton: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"
  }
});

export default styles;
